import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import rootRoutes from './routers';
import Tool from './containers/DevTools';
function onRouterUpdate() {
  window.scrollTo(0, 0);
}
const devTool = process.env.NODE_ENV === 'development' ? <Tool /> : null;
const store = configureStore();
render(
  <Provider store={store}>
  <div>
 <Router history={browserHistory} onUpdate={onRouterUpdate} routes={rootRoutes} />
 {devTool}
 </div>
  </Provider>,
  document.getElementById('root')
);
