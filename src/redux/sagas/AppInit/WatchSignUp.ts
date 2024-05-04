import {call, getContext, put, select, takeLatest} from 'redux-saga/effects';

function save(realm, profile): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      realm.write(() => {
        console.log('realm.write');
        const instance = realm.create('Profile', {
          name: profile.name,
          email: profile.email,
        });
        resolve(instance);
      });
    } catch (error) {
      reject(error);
    }
  });
}

function* appSignUp() {
  console.log('SIGNUP ********');

  try {
    const realm = yield getContext('realm');
    const signUp = yield select((state: any) => state.signUp);

    if (realm) {
      // const result = yield call(realm.objects, 'Profile');
      console.log('criar o Profile:', signUp);
      console.log('realm:', realm);
      const createdProfile = yield call(save, realm, signUp);
      console.log('createdProfile:', createdProfile);
      yield put({
        type: 'SET_PROFILE',
        payload: createdProfile,
      });
      console.log('mandar pra Home');
    } else {
      console.log('realm not found');
      console.log('error: preciso criar algo');
    }
  } catch (error) {
    console.log('error: ****', error);
  }
}

function* watchSignUp() {
  yield takeLatest('SIGN_UP', appSignUp);
}

export default watchSignUp;
