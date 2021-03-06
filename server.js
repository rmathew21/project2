const express = require("express");
const sequelize = require("sequelize");
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
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
const routes = require("./controller/flights_controller.js");
app.use(routes);
require("./routes/html-routes.js")(app);


// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


// For Handlebars
// app.set('views', './views')
// app.engine('handlebars', exphbs({
//     extname: '.handlebars'
// }));
// app.set('view engine', '.handlebars');

// app.get('/', function(req, res) {
//     res.send('Welcome to Passport with Sequelize');
// })

// models
const models = require('./models');

// routes
const authRoute = require('./routes/auth')(app, passport);

// load passport strategies
require('./config/passport/passport')(passport, models.user);


// sync database
models.sequelize.sync().then(function(){
    console.log("It works")
}).catch(function(err){
    console.log(err, "something wen't wrong with DB update")
});

app.listen(PORT, function () {
    console.log("App listening on port" + PORT);
});
