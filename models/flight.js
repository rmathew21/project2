var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");
var Flights = sequelize.define("Flights", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,

    },
    trip_id: {
        type: Sequelize.INTEGER,
        allowNull: false,

    },
    departdate: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    departure: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    returndate: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    returntime: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    budget_price: {
        type: Sequelize.INTEGER,
        allowNull: false,

    },
    actual_price: {
        type: Sequelize.INTEGER,
        allowNull: false,

    },
}
);
Flights.sync();
module.exports = Flights;