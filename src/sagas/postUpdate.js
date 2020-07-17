import { takeEvery, call, put } from 'redux-saga/effects';
import { UPDATE_USER_ASYNC, UPDATE_USER } from '../store/action';
import axios from 'axios';

// export Generater functions
export function* getUpdateAsync(payload) {
  try {
    const result = yield call(
      axios.put,
      `${process.env.REACT_APP_DATA_URL}/${payload.payload.id}`,
      payload.payload
    );
    yield put({ type: UPDATE_USER_ASYNC, payload: result.data });
  } catch (error) {
    console.log('error', error);
  }
}

// First Load when someone dispatch ADD_USER
// Listing to all dispatch's
export function* watchpostUpdata() {
  yield takeEvery(UPDATE_USER, getUpdateAsync);
}
