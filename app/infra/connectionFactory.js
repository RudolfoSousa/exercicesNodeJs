var mysql  = require('mysql');

module.exports = function() {
    return mysql.createConnection({
       host: "localhost",
            port: '3300',
            user: "root",
            password : "1234",
            database: "casadocodigo"
    });
}