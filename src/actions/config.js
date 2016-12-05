import superagent from 'superagent';
export default function requestAPI(path, data, mode = 'GET') {
  return new Promise((reslove, reject) => {
    let request = null;
    switch (mode.toUpperCase()) {
      case 'POST':
        request = superagent.post(path)
          .set('Content-Type', 'application/x-www-form-urlencoded');
        request.send(data);
        break;
      default:
        request = superagent.get(path);
        if (data) {
          request.query(data);
        }
    }
    request.end((err, {body} = {}) => {
      if (err) {
        reject(err);
        return ;
      }
      reslove(body);
    });
  });
}
