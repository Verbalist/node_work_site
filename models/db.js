var pg = require('pg');
var conString = "postgres://root:qweasdzxc@192.81.222.48:5432/work_users";

function query(SQLquery, args, resolve) {
  pg.connect(conString, function(err, client, done) {
    if (err) {
      console.log(err);
      resolve([]);
    } else {
      promise = new Promise(function(resolve, reject){
          client.query(SQLquery, args, function(err, result) {
              if (err) {
                console.log('error running query', err.detail);
              }
              done();
              if (!err) {resolve(result.rows)} else {resolve([])};

          });
      });
      promise.then(resolve);
    }
  });
}
exports.query = query;
