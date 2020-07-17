import { takeEvery, call, put } from 'redux-saga/effects';
import { ADD_USER, ADD_USER_ASYNC } from '../store/action';
import axios from 'axios';

// export Generater functions
export function* getAddAsync(payload) {
  try {
    const result = yield call(
      axios.post,
      process.env.REACT_APP_POST_URL,
      payload.payload
    );
    yield put({ type: ADD_USER_ASYNC, payload: result.data });
  } catch (error) {
    console.log('error', error);
  }
}

// First Load when someone dispatch ADD_USER
// Listing to all dispatch's
export function* watchpostAdd(payload) {
  yield takeEvery(ADD_USER, getAddAsync);
}
