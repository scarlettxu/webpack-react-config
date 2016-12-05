import requestAPI from './config';


export function getUserName(params) {
  return {
    types: [
      'LOAD_USERNAME',
      'LOAD_USERNAME_SUCCESS',
      'LOAD_USERNAME_FAIL',
    ],
    promise: requestAPI(`https://cnodejs.org/api/v1/user/${params}`, null, 'get'),
  };
}

