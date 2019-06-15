const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// need to require models folder

// Using Passport Local Strategy for email/password
passport.use(new LocalStrategy(
    // sign in using email, not username
    {
        usernameField: "email"
    },
    function(email, password, done) {
        // run code when user tries to sign in
        db.User.findOne({
            where: {
                email: email
            }
        }).then(function(dbUser) {
            // If there's no user with the given email
            if (!dbUser) {
                return done(null, false, {
                    message: "Incorrect email."
                });
            }
            // If user enters correct email, but wrong password
            else if (!dbUser.validPassword(password)) {
                return done(null, false, {
                    message: "Incorrect password."
                })
            }
            // If none of the above, return the user
            return done(null, dbUser);
        });
    }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to seralize the deseralize the user
// Just consder this part boilderplate needed to make it all work
passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;