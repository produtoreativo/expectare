import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {call, getContext, put, select, takeLatest} from 'redux-saga/effects';
import {WEB_CLIENT_ID} from '@env';

GoogleSignin.configure({
  webClientId: WEB_CLIENT_ID,
});

async function getUserCredentials(): Promise<FirebaseAuthTypes.AuthCredential> {
  const {idToken} = await GoogleSignin.signIn();
  return auth.GoogleAuthProvider.credential(idToken);
}

const getUserBy = (credential: FirebaseAuthTypes.AuthCredential) => {
  return auth().signInWithCredential(credential);
};

function* appSignIn() {
  console.log('SIGN_IN ********');

  try {
    const hasPlayServices = yield call(GoogleSignin.hasPlayServices, {
      showPlayServicesUpdateDialog: true,
    });

    if (!hasPlayServices) {
      yield put({
        type: 'SIGN_IN_FAILED',
        payload: 'Device not support this feature',
      });
      return;
    }

    const credential = yield call(getUserCredentials);
    const user = yield call(getUserBy, credential);

    yield put({
      type: 'SIGN_IN_SUCCESS',
      payload: user,
    });
  } catch (error) {
    console.log('error: ****', error);

    yield put({
      type: 'SIGN_IN_FAILED',
      payload: 'Unexpected error occurred',
    });
  }
}

function* watchSignIn() {
  yield takeLatest('SIGN_IN', appSignIn);
}

export default watchSignIn;
