
const rootRoute = {
  path: '/',
  indexRoute: {
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./containers/Home').default);
      }, 'HomePage');
    },
  },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./containers/App').default);
    }, 'Main');
  },
  childRoutes: [
    require('./containers/Login/routers'),
    require('./containers/Home/routers'),
  ],
};
export default rootRoute;

