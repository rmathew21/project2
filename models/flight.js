module.exports = function (sequelize, dataTypes) {
    var Flights = sequelize.define(Flights, {
        id: {
            type: dataTypes.id,
            allowNull: false,
        },
        user_id: {
            type: dataTypes.id,
            allowNull: false,

        },
        trip_id: {
            type: dataTypes.id,
            allowNull: false,

        },
        departdate: {
            type: dataTypes.DATE,
            allowNull: false,

        },
        departure: {
            type: dataTypes.STRING,
            allowNull: false,

        },
        returndate: {
            type: dataTypes.DATE,
            allowNull: false,

        },
        returntime: {
            type: dataTypes.STRING,
            allowNull: false,

        },
        budget_price: {
            type: dataTypes.INTEGER,
            allowNull: false,

        },
        actual_price: {
            type: dataTypes.INTEGER,
            allowNull: false,

        },
    }
    );
    return Flights;
}
