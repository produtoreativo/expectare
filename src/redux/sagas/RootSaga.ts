import {fork} from 'redux-saga/effects';
import watchAppInit from './AppInit/WatchAppInit';
import watchSignUp from './AppInit/WatchSignUp';
import watchLogout from './AppFinish/WatchLogout';

function* RootSaga() {
  yield fork(watchAppInit);
  yield fork(watchSignUp);
  yield fork(watchLogout);
}

export default RootSaga;
