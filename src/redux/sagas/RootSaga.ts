import {fork} from 'redux-saga/effects';
import watchAppInit from './AppInit/WatchAppInit';
import watchSignUp from './AppInit/WatchSignUp';
import watchLogout from './AppFinish/WatchLogout';
import watchSignIn from './AppInit/WatchSignIn';

function* RootSaga() {
  yield fork(watchAppInit);
  yield fork(watchSignUp);
  yield fork(watchLogout);
  yield fork(watchSignIn);
}

export default RootSaga;
