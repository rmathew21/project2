const express = require("express");
const router = express.Router();
const Flight = require("../models/flight");
const Hotel = require("../models/hotels");
router.get("/", function (req, res) {
    Flight.all(function (data) {

        const flightObject = {
            flights: data,
        }
        console.log(flightObject);
    })
})
router.get("/", function (req, res) {
    Hotels.all(function (req, res) {
        Hotels.all(function (data) {
            const hotelObject = { hotels: data }
        });
        console.log(hotelObject);
    })
})


router.get("/find-flights", function (req, res) {

    unirest.get(`https://apidojo-kayak-v1.p.rapidapi.com/locations/search?where=${city}`) //THIS FINDS THE CITY CODE
    .header("X-RapidAPI-Host", keys.hotelap.id)
    .header("X-RapidAPI-Key", keys.hotelap.secret)
    .end(function (result) {
        const destinationcitycode = result.body[0].ctid; //the numbers
        const destinationportcode = result.body[0].apicode; //the airport code
        console.log(destinationportcode)
        unirest.get(`https://apidojo-kayak-v1.p.rapidapi.com/locations/search?where=${origin}`) //THIS FINDS THE CITY OF ORIGIN CODE
            .header("X-RapidAPI-Host", keys.hotelap.id)
            .header("X-RapidAPI-Key", keys.hotelap.secret)
            .end(function (result) {
                const originairportcode = result.body[0].apicode;
                console.log(destinationcitycode)
                unirest.get(`https://apidojo-kayak-v1.p.rapidapi.com/hotels/create-session?&airportcode=${destinationportcode}&rooms=1&citycode=${destinationcitycode}&checkin=2019-08-12&checkout=2019-08-13&adults=1`)
                    .header("X-RapidAPI-Host", keys.hotelap.id)
                    .header("X-RapidAPI-Key", keys.hotelap.secret)
                    .end(function (result) {
                        console.log(result.body.hotelset);
                        unirest.get(`https://apidojo-kayak-v1.p.rapidapi.com/flights/create-session?origin1=${originairportcode}&destination1=${destinationportcode}&departdate1=2019-08-12&cabin=e&currency=USD&adults=1&bags=0`)
                            .header("X-RapidAPI-Host", keys.hotelap.id)
                            .header("X-RapidAPI-Key", keys.hotelap.secret)
                            .end(function (result) {
                                console.log('-------------------------------------')
                                console.log('flight api ran"')
                                console.log(result.body);
                            });
                    });
            });
    });

})




module.exports = router;