var Flight = require("../models/flight.js");
var Hotel = require("../models/hotels");
var User = require("../models/user.js");

module.exports = function (app) {
    app.get("api/all", function (req, res) {
        Flight.findAll({}).then(function (result) {
            result.json(result);
        });
    });
    app.get("api/all", function (req, res) {
        Hotel.findAll({}).then(function (result) {
            result.json(result);
        });
    });
    app.get("api/all", function (req, res) {
        User.findAll({}).then(function (result) {
            result.json(result);
        });
    });
    //some api calls that would return all of the information already stored in the db?

    app.post("/api/newFlight", function (req, res) {
        Flight.create({
            id: req.body.id,
            user_id: req.body.user_id,
            trip_id: req.body.trip_id,
            departdate: req.body.departdate,
            departure: req.body.departure,
            returndate: req.body.returndate,
            returntime: req.body.returntime,
            budget_price: req.body.budget_price,
            actual_price: req.body.actual_price,
        }).then(function (result) {
            res.end();
        })
    });
    app.post("/api/newHotel", function (req, res) {
        Hotel.create({
            id: req.body.id,
            user_id: req.body.user_id,
            location: req.body.location,
            budget_price: req.body.budget_price,
            actual_price: req.body.actual_price
        }).then(function (result) {
            res.end();
        });

        app.post("api/newUser", function (req, res) {
            User.create({
                id: req.body.id,
                email: req.body.email,
                password: req.body.password,
                status: req.body.status,
            }).then(function (result) {
                res.end();

            })
        })
        //api calls sending the new objects to the database?
    })
};