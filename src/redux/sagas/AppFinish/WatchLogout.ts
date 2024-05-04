import {call, getContext, put, takeLatest} from 'redux-saga/effects';

function deleteAllData(realm: any): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      realm.write(() => {
        realm.deleteAll();
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}

function* handleLogout(action: any) {
  try {
    const realm = yield getContext('realm');
    yield call(deleteAllData, realm);
    yield put({type: 'LOGOUT_SUCCESS'});
  } catch (error) {}
}

function* watchLogout() {
  yield takeLatest('LOGOUT', handleLogout);
}

export default watchLogout;
