const mysql2 = require("mysql2");
console.log("connection file running")
const connection = mysql2.createConnection({
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