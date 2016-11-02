import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, browserHistory } from 'react-router';
const rootRoute = {
    path: '/',
   indexRoute: {
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./Home').default)
      }, 'HomePage')
    },
  },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./App').default)
    }, 'Main')
  },
    childRoutes: [
      require('./Login/routers'),
      require('./Home/routers'),
    ]
};
ReactDOM.render(
  (<Router
  history={browserHistory}
  routes={rootRoute}
  />),
  document.getElementById('root')
);
