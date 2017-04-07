import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware(rootEpic)

export default function configureStore () {
  const store = createStore(reducers, applyMiddleware(epicMiddleware))
  return store
}