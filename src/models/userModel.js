const db = require('../config/database');

exports.getAllUsers = (callback) => {
  const query = 'SELECT * FROM participants';
  db.all(query, [], (err, rows) => {
    callback(err, rows);
  });
};
