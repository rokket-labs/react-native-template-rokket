import { all, takeLatest } from 'redux-saga/effects'

/* ------------- Types ------------- */
import { actions } from '../Redux/CatRedux'
/* ------------- Sagas ------------- */
import { getCatAvatar } from './CatSagas'

/* ------------- API ------------- */

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  actions.catRequest.toString
  yield all([takeLatest(actions.catRequest.toString(), getCatAvatar)])
}
