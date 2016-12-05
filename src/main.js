import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import rootRoutes from './routers';
function onRouterUpdate() {
  window.scrollTo(0, 0);
}
const store = configureStore();
render(
  <Provider store={store}>
 <Router history={browserHistory} onUpdate={onRouterUpdate} routes={rootRoutes} />
  </Provider>,
  document.getElementById('root')
);
