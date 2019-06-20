const express = require("express");
const sequelize = require("sequelize");
var unirest = require('unirest');
var inquier = require("inquirer");
require('dotenv').config();
const keys = require("./key.js");
const db = require("./models");
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
// inquier.prompt({
//     type: 'input',
//     message: 'Where are you traveling?',
//     name: 'selection'
// }).then(function (response, err) {
//     if (err) throw err;
//     const city = response.selection;
//     inquier.prompt({
//         type: 'input',
//         message: 'Where are you coming from?',
//         name: 'origin'
//     }).then(function (response, err) {
//         const origin = response.origin;
//         unirest.get(`https://apidojo-kayak-v1.p.rapidapi.com/locations/search?where=${city}`) //THIS FINDS THE CITY CODE
//             .header("X-RapidAPI-Host", keys.hotelap.id)
//             .header("X-RapidAPI-Key", keys.hotelap.secret)
//             .end(function (result) {
//                 const destinationcitycode = result.body[0].ctid; //the numbers
//                 const destinationportcode = result.body[0].apicode; //the airport code
//                 console.log(destinationportcode)
//                 unirest.get(`https://apidojo-kayak-v1.p.rapidapi.com/locations/search?where=${origin}`) //THIS FINDS THE CITY OF ORIGIN CODE
//                     .header("X-RapidAPI-Host", keys.hotelap.id)
//                     .header("X-RapidAPI-Key", keys.hotelap.secret)
//                     .end(function (result) {
//                         const originairportcode = result.body[0].apicode;
//                         console.log(destinationcitycode)
//                         unirest.get(`https://apidojo-kayak-v1.p.rapidapi.com/hotels/create-session?&airportcode=${destinationportcode}&rooms=1&citycode=${destinationcitycode}&checkin=2019-08-12&checkout=2019-08-13&adults=1`)
//                             .header("X-RapidAPI-Host", keys.hotelap.id)
//                             .header("X-RapidAPI-Key", keys.hotelap.secret)
//                             .end(function (result) {
//                                 console.log(result.body.hotelset);
//                                 unirest.get(`https://apidojo-kayak-v1.p.rapidapi.com/flights/create-session?origin1=${originairportcode}&destination1=${destinationportcode}&departdate1=2019-08-12&cabin=e&currency=USD&adults=1&bags=0`)
//                                     .header("X-RapidAPI-Host", keys.hotelap.id)
//                                     .header("X-RapidAPI-Key", keys.hotelap.secret)
//                                     .end(function (result) {
//                                         console.log('-------------------------------------')
//                                         console.log('flight api ran"')
//                                         console.log(result.body);
//                                     });
//                             });
//                     });


//             });
//     });
// });