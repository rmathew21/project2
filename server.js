const express = require("express");
const sequelize = require("sequelize");

require('dotenv').config();
const keys = require("./key.js");

const db = require("./models");
console.log(db)
const app = express();
// db.sequelize.sync().then(function () {
//     app.listen(PORT, function () {
//         console.log('DB Synced listening on ' + PORT);
//     });
// });
const PORT = process.env.PORT || 8080;
require("./config/connection.js")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
require("./routes/html-routes.js")(app);
app.listen(PORT, function () {
    console.log("App listening on port" + PORT);
});