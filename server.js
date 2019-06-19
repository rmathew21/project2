const express = require("express");
const sequelize = require("sequelize");
var unirest = require('unirest');
var inquier = require("inquirer");
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
// app.listen(PORT, function () {
//     console.log("App listening on port" + PORT);
// });
// unirest.get("https://apidojo-hipmunk-v1.p.rapidapi.com/flights/create-session?infants_lap=0&children=0&seniors=0&country=US&from0=LAX&to0=IAH&date0=Jan+27+2020&pax=1&cabin=Coach")
//     .header("X-RapidAPI-Host", keys.flightap.id)
//     .header("X-RapidAPI-Key", keys.flightap.secret)
//     .end(function (result) {
//         console.log(result.body);
//         console.log('your call ran')
//     });
inquier.prompt({
    type: 'input',
    message: 'Which city would you like to search for?',
    name: 'selection'
}).then(function (response, err) {
    if (err) throw err;
    const city = response.selection;
    unirest.get(`https://apidojo-kayak-v1.p.rapidapi.com/locations/search?where=${city}`)
        .header("X-RapidAPI-Host", keys.hotelap.id)
        .header("X-RapidAPI-Key", keys.hotelap.secret)
        .end(function (result) {
            console.log(result.body[0].ctid);
            console.log(result.body[0].apicode);
            const citycode = result.body[0].ctid;
            const portcode = result.body[0].apicode;
            unirest.get(`https://apidojo-kayak-v1.p.rapidapi.com/hotels/create-session?&airportcode=${portcode}&rooms=1&citycode=${citycode}&checkin=2019-08-12&checkout=2019-08-13&adults=1`)
                .header("X-RapidAPI-Host", keys.hotelap.id)
                .header("X-RapidAPI-Key", keys.hotelap.secret)
                .end(function (result) {
                    var queryURL = `https://apidojo-kayak-v1.p.rapidapi.com/hotels/create-session?&airportcode=${portcode}&rooms=1&citycode=${citycode}&checkin=2019-08-12&checkout=2019-08-13&adults=1`;
                    console.log(queryURL);
                    console.log("doublesuccess");
                    console.log(result.body.hotelset);
                });

        });
})



//     //result.status, result.headers,