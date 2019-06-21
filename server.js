const express = require("express");
const sequelize = require("sequelize");
var inquier = require("inquirer");
require('dotenv').config();
const keys = require("./key.js");
//const db = require("./models");
const app = express();
const passport = require("passport");
const session = require("express-session");
const exphbs = require("express-handlebars");
// db.sequelize.sync().then(function () {
//   app.listen(PORT, function () {
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

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// models
const models = require('./models');

// routes
const authRoute = require('./routes/auth')(app, passport);

// load passport strategies
require('./config/passport/passport')(passport, models.user);
