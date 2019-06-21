
module.exports = function (sequelize, dataTypes) {
    const user = sequelize.define("user", {
        email: dataTypes.STRING,
        password: dataTypes.STRING
    });
    return user;
    const bcrypt = require("bcryptjs");

    module.exports = function (sequelize, DataTypes) {
        // creating our User model
        const User = sequelize.define("User", {
            // email can't be null // must be in proper email format
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true
                }
            },
            // password can't be null
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        });

        // Creating custom method for our User model
        // This will check if an unhashed password entered by the
        // user can be compared to the hashed password stored in the db
        User.prototype.validPassword = function (password) {
            return bcrypt.compareSync(password, this.password);
        };

        // Automatically hasing password before any User is created
        User.beforeCreate(user => {
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
        });
        return User;

    }
};