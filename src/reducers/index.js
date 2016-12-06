// 把每个容器组件对应的 state 绑定到 全局state里面
import { combineReducers } from 'redux';
import { getUserName } from './modules';
const rootReducer = combineReducers({
  userName: getUserName,
});
export default rootReducer;
