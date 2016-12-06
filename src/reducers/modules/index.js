// 这里的 case 的值和action里的type 一一对应。
// reducer 就是对 state 的处理函数。例如增删改查。
const initialState = {
  loaded: false,
};
export function getUserName(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_USERNAME':
      return {
        ...state,
        loading: true,
      };
    case 'LOAD_USERNAME_SUCCESS':
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result.data,
      };
    case 'LOAD_USERNAME_FAIL':
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      };
    default:
      return state;
  }
}
