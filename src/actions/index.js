import requestAPI from './config';

// actions 默认有三种状态，请求开始，请求成功，请求失败。
// 优点:是统一处理，知道每个请求的状态，很方便的加loading 动画， 请求互相依赖也可以用Promise解决.
// 缺点: 声明繁琐
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

