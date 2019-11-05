import AsyncStorage from '@react-native-community/async-storage'
import { persistStore } from 'redux-persist'

import DebugConfig from 'appSrc/Config/DebugConfig'
import ReduxPersist from 'appSrc/Config/ReduxPersist'

const updateReducers = store => {
  const reducerVersion = ReduxPersist.reducerVersion

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion')
    .then(localVersion => {
      if (localVersion !== reducerVersion) {
        if (DebugConfig.useReactotron) {
          console.tron.display({
            name: 'PURGE',
            value: {
              'Old Version:': localVersion,
              'New Version:': reducerVersion
            },
            preview: 'Reducer Version Change Detected',
            important: true
          })
        }
        // Purge store
        persistStore(store, undefined).purge()
        AsyncStorage.setItem('reducerVersion', reducerVersion)
      } else {
        persistStore(store, undefined)
      }
    })
    .catch(() => {
      persistStore(store, undefined)
      AsyncStorage.setItem('reducerVersion', reducerVersion)
    })
}

export default { updateReducers }
