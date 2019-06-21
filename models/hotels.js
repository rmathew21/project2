module.exports = function (sequelize, dataTypes) {
    var Hotel = sequelize.define(Hotel, {
        id: {
            type: dataTypes.id,
            allowNull: false,
        },
        user_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        location: {
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
        }
    }
    );
    return Hotel;
}
