import { all, takeLatest } from 'redux-saga/effects'

/* ------------- Types ------------- */
import { CatTypes } from 'appSrc/Redux/CatRedux'

/* ------------- Sagas ------------- */
import { getCatAvatar } from './CatSagas'

/* ------------- API ------------- */

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  console.tron.log(CatTypes.CAT_REQUEST)
  yield all([takeLatest(CatTypes.CAT_REQUEST, getCatAvatar)])
}
