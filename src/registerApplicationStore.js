import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default function setupStore() {
  return createStore(appReducer, composeWithDevTools(applyMiddleware(thunk)))
}

// export default function applicationStore() {
//   return createStore(appReducer, window.devToolsExtension ? window.devToolsExtension() : f => f)
// }