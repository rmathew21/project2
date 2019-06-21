const express = require("express");
const router = express.Router();
const Flight = require("../models/flight");
const Hotel = require("../models/hotels");
router.get("/", function (req, res) {
    Flight.all(function (data) {
        const uniqueIds = Flight.getUniqueIds(data);
        data = Flight.groupFlights(uniqueIds, data);
        const flightObject = {
            flights: data,
        }
        console.log(flightObject);
    })
})

module.exports = router;