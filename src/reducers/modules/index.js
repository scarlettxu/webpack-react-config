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
