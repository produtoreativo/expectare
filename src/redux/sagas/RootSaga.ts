import {fork} from 'redux-saga/effects';
import watchAppInit from './AppInit/WatchAppInit';

function* RootSaga() {
  yield fork(watchAppInit);
}

export default RootSaga;
