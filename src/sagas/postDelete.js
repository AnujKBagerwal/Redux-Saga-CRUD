import { takeEvery, call, put } from 'redux-saga/effects';
import { DELETE_USER_ASYNC, DELETE_USER } from '../store/action';
import axios from 'axios';

// export Generater functions
export function* getDeleteAsync(payload) {
  try {
    yield call(
      axios.delete,
      `${process.env.REACT_APP_DATA_URL}/${payload.payload.id}`
    );
    yield put({ type: DELETE_USER_ASYNC, payload: payload.payload });
  } catch (error) {
    console.log('error', error);
  }
}

// First Load when someone dispatch ADD_USER
// Listing to all dispatch's
export function* watchpostDelete() {
  yield takeEvery(DELETE_USER, getDeleteAsync);
}
