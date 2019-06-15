const mysql = require("mysql");
console.log("connection file running")
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "flights_db"
});

connection.connect(function (err) {
    if (err) {
        console.err("error connecting" + err.stack);
        return;
    }
    console.log("connected as " + connection.threadId);
});

module.exports = connection;