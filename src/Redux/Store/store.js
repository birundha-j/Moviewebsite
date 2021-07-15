import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'
import AllReducers from "../Reducer";
import rootSaga from '../Saga/index'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    AllReducers,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)
// return store
export default store;
