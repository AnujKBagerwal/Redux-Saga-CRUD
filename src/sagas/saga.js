import { all, fork } from 'redux-saga/effects';
import { watchpostAdd } from './postAdd';
import { watchpostDelete } from './postDelete';
import { watchpostUser } from './postGet';
import { watchpostUpdata } from './postUpdate';

// This is Root Saga where all saga will compbind
// This root saga will go to index.js file to run and start listen dispatches
export function* rootSaga() {
  yield all([
    fork(watchpostUser),
    fork(watchpostAdd),
    fork(watchpostUpdata),
    fork(watchpostDelete),
  ]);
}
