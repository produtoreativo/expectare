import {call, put, takeLatest} from 'redux-saga/effects';
import Realm from 'realm';
import ProfileSchema from '@expectare/models/Profile';

function* appInit() {
  console.log('APP_INIT ********');

  try {
    const realm = yield call(Realm.open, {
      schema: [ProfileSchema],
    });

    if (realm) {
      const result = yield call(realm.objects, 'Profile');
      console.log('result:', result);
      // 1. Verificar se tem banco local, se não tem manda pra tela de Setup
      // 2. Se tem banco local e não tem Profile, manda pra tela de criar Profile

      if (result.length > 0) {
        console.log('mandar pra Home');
        // 3. Se tem banco local e tem Profile carrega os dados no Redux
        // 4. Se tem banco local e tem Profile, manda pra Home
        yield put({
          type: 'APP_INIT_SUCCESS',
          payload: {profile: result[0]},
        });
      }
    }
  } catch (error) {
    console.log('error: ****', error);
  }
}

function* watchAppInit() {
  yield takeLatest('APP_INIT', appInit);
}

export default watchAppInit;