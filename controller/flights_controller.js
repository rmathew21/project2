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

module.exports = router;