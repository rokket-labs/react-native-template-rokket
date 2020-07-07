import { call, put } from 'redux-saga/effects'

import { actions as CatActions } from '../Redux/CatRedux'
import API from '../Services/CatApi'

const api = API.create()

export function* getCatAvatar() {
  const response = yield call(api.getCat)
  if (response.ok) {
    const { data } = response
    const firstCat = data && data[0]
    const avatar = firstCat.url
    console.tron.log(avatar)
    // do data conversion here if needed
    yield put(CatActions.catSuccess(avatar))
  } else {
    yield put(CatActions.catFailure())
  }
}
