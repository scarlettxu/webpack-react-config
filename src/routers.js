
const rootRoute = {
  path: '/',
  indexRoute: {
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./components/Home').default);
      }, 'HomePage');
    },
  },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./containers/App').default);
    }, 'Main');
  },
  childRoutes: [
    require('./components/Login/routers'),
    require('./components/Home/routers'),
  ],
};
export default rootRoute;

