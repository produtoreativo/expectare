import {fork} from 'redux-saga/effects';
import watchAppInit from './AppInit/WatchAppInit';
import watchSignUp from './AppInit/WatchSignUp';

function* RootSaga() {
  yield fork(watchAppInit);
  yield fork(watchSignUp);
}

export default RootSaga;
