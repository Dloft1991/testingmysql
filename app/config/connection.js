var mysql = require('mysql');
var connection;

if ( process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB-URL);

}else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Dlofton2',
    database: 'starwars'
  });
};

connection.connect();
module.exports = connection;
