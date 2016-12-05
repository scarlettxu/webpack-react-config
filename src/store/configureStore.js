import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from './middleware/promiseMiddleware';
import createLogger from 'redux-logger';
import targetReducer from '../reducers';
export default function configureStore() {
  const store = createStore(
    targetReducer,
    {},
    applyMiddleware(
      promiseMiddleware(),
      createLogger()
      )
  );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
