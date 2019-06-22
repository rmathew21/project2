module.exports = function(sequelize, Sequelize) {
    // creating our User model
    const User = sequelize.define("user", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        // email can't be null // must be in proper email format
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        // password can't be null
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }, 
        status: {
            type: Sequelize.ENUM('active', 'inactive'), defaultValue: 'active'
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

