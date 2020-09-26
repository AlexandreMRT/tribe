import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './ducks';
import sagas from './sagas';

const middlewares = [];

const sagaMonitor = null;

const sagaMiddleWare = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleWare);

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares),
  )
);

sagaMiddleWare.run(sagas);

export default store;