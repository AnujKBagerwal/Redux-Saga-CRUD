import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_USER_ASYNC, GET_USER } from '../store/action';
import { getPostUrl } from '../services/service';

// export Generater functions
export function* getUserAsync() {
  try {
    const res = yield call(getPostUrl);
    yield put({ type: GET_USER_ASYNC, payload: res.data });
  } catch (error) {
    console.log('error', error);
  }
}

// First Load when someone dispatch ADD_USER
// Listing to all dispatch's
export function* watchpostUser() {
  yield takeEvery(GET_USER, getUserAsync);
}
