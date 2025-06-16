const mysql = require("mysql2")

const mysql_connection = mysql.createPool({
    host : "localhost",
    user : "root",
    port : 3306,
    password : "",
    database : "user_name"
});

module.exports = mysql_connection.promise();