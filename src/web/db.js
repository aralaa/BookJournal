var mysql = require('mysql');

var pool;

exports.connect = function(done) {
    pool = mysql.createPool({
        connectionLimit: 100,
        host:'localhost',
        port: 3306,
        user:'root',
        password: 'mysql1234',
        database: 'bookjournaldb',
    });
}

exports.get = function() {
  return pool;
}