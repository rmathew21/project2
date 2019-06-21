// const bcrypt = require("bcryptjs");    
    
// requiring bcrypt for password hashing

module.exports = function(sequelize, DataTypes) {
    // creating our User model
    const User = sequelize.define("User", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: sequelize.INTEGER
        },
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
        }, 
        status: {
            type: sequelize.ENUM('active', 'inactive'), defaultValue: 'active'
        }

    });

    
// Creating custom method for our User model

    // // user can be compared to the hashed password stored in the db
    // User.prototype.validPassword = function(password) {
    //     return bcrypt.compareSync(password, this.password);
    // };

    // // Automatically hasing password before any User is created
    // User.beforeCreate(user => {
    //     user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    // })
    return User;
}

