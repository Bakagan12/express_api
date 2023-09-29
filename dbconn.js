const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'expressapi_db',
    waitForConnections: true,

});

module.exports = pool.promise();