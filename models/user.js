module.exports = function (sequelize, dataTypes) {
    const user = sequelize.define("user", {
        email: dataTypes.STRING,
        password: dataTypes.STRING
    });
    return user;
};