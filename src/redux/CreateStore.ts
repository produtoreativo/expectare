import {applyMiddleware, legacy_createStore} from 'redux';
import RootReducer from './RootReducer';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './sagas/RootSaga';
import Realm from 'realm';
import ProfileSchema from '@expectare/models/Profile';

function CreateStore() {
  const realm = new Realm({
    schema: [ProfileSchema],
  });

  const sagaMiddleware = createSagaMiddleware({
    context: {
      realm,
    },
  });
  const store = legacy_createStore(
    RootReducer,
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(RootSaga);
  return store;
}

export default CreateStore;
