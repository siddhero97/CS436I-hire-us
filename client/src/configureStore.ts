import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './store/index';

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
}