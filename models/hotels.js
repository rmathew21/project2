var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");



var Hotel = sequelize.define("Hotel", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    location: {
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
    }
}
);
Hotel.sync();
module.exports = Hotel;
