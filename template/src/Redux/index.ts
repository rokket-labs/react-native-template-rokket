import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import { Reducer } from 'react'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import Config from '../Config/DebugConfig'
import Reactotron from '../Config/ReactotronConfig'
import ReduxPersist from '../Config/ReduxPersist'
import rootSaga from '../Sagas'
import Rehydration from '../Services/Rehydration'
import { reducer as catReducer } from './CatRedux'
import { reducer as counterReducer } from './CounterRedux'

export const createStore = () => {
  const middleware = getDefaultMiddleware({
    thunk: false,
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
  const enhancers = []

  /* ------------- Saga Middleware ------------- */

  const sagaMonitor =
    Config.useReactotron && Reactotron.createSagaMonitor
      ? Reactotron.createSagaMonitor()
      : undefined
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  middleware.push(sagaMiddleware)

  if (Config.useReactotron && Reactotron.createEnhancer) {
    console.tron.log('YAS')
    enhancers.push(Reactotron.createEnhancer())
  }

  const reducers = combineReducers({
    counter: counterReducer,
    cat: catReducer,
  })
  let persistedReducers

  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig
    persistedReducers = persistReducer(persistConfig, reducers) as Reducer<
      any,
      AnyAction
    >
  }

  const store = configureStore({
    reducer: persistedReducers || reducers,
    middleware,
    enhancers,
  })

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    Rehydration.updateReducers(store)
  }

  sagaMiddleware.run(rootSaga)

  return store
}

export type RootState = ReturnType<typeof createStore> extends EnhancedStore<
  CombinedState<infer T>
>
  ? T
  : unknown
