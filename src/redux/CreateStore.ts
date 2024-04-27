import {applyMiddleware, legacy_createStore} from 'redux';
import RootReducer from './RootReducer';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './sagas/RootSaga';

function CreateStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = legacy_createStore(
    RootReducer,
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(RootSaga);
  return store;
  // return null;
}

export default CreateStore;
