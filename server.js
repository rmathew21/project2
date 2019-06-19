const express = require("express");
const sequelize = require("sequelize");
var unirest = require('unirest');

require('dotenv').config();
const keys = require("./key.js");

const db = require("./models");
//console.log(db)
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
unirest.get("https://apidojo-hipmunk-v1.p.rapidapi.com/flights/create-session?infants_lap=0&children=0&seniors=0&country=US&from0=LAX&to0=IAH&date0=Jan+27+2020&pax=1&cabin=Coach")
    .header("X-RapidAPI-Host", keys.flightap.id)
    .header("X-RapidAPI-Key", keys.flightap.secret)
    .end(function (result) {
        console.log(result.body);
        console.log('your call ran')
    });


    //result.status, result.headers,