const express = require("express");
const sequelize = require("sequelize");
var unirest = require('unirest');
var inquier = require("inquirer");
require('dotenv').config();
const keys = require("./key.js");
//const db = require("./models");
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
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
const routes = require("./controller/flights_controller.js");
app.use(routes);
require("./routes/html-routes.js")(app);
app.listen(PORT, function () {
    console.log("App listening on port" + PORT);
});