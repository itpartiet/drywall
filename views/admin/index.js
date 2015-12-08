'use strict';

exports.init = function(req, res, next) {
  var sigma = {};
  var collections = ['User', 'Account', 'Admin', 'AdminGroup', 'Category', 'Status'];
  var queries = [];

  collections.forEach(function(el, i, arr) {
    queries.push(function(done) {
      var e = req.app.db[el];
      if (!e) {
        return done(null);
      }

      e.count({}).then(function(count) {
        sigma['count'+ el] = count;
        done(null, el);
      })
      .catch(function(err) {
          return done(err, null);
      });
    });
  });

  var asyncFinally = function(err, results) {
    if (err) {
      return next(err);
    }

    res.render('admin/index', sigma);
  };

  require('async').parallel(queries, asyncFinally);
};
