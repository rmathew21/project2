const bcrypt = require('bcryptjs');

module.exports = function(passport, user) {
    const User = user;
    const LocalStrategy = require("passport-local").Strategy;

    // serialize
    passport.serializeUser(function(user, cb) {
        cb(null, user);
    });
    
    passport.deserializeUser(function(obj, cb) {
        cb(null, obj);
    });


    // Using Passport Local Strategy for email/password
    passport.use('local-signup', new LocalStrategy(
    // sign in using email, not username
    {
        usernameField: "email",
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
        const generateHash = function(password) {
            return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
        };
        // run code when user tries to sign in
        User.findOne({
            where: {
                email: email
            }
        }).then(function(user) {
            // If there's no user with the given email
            if (user) 
            {
                return done(null, false, {
                    message: "This email is already taken"
                });
            } else 
            {
                const userPassword = generateHash(password);
                const data =
                {
                    email: email,
                    password: userPassword
                };

                User.create(data).then(function(newUser, created) {
                    if (!newUser) {
                        return done(null,false);
                    }
                    if (newUser) {
                        return done(null, newUser);
                    }
                });
            }

        });

    }
            
));


// Local Signin
passport.use('local-signin', new LocalStrategy(
    {
        // by default, local strategy uses username, but we're changing to email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the cb
    },
    function(req, email, password, done) {
        let User = user;
        let isValidPassword = function(userpass, password) {
            return bcrypt.compareSync(password, userpass);
        }
        User.findOne({
            where: {
                email: email
            }
        }).then(function(user) {
            if (!user) {
                return done(null, false, {
                    message: 'Email does not exist'
                });
            }
            if (!isValidPassword(user.password, password)) {
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }
            let userinfo = user.get();
            return done(null, userinfo);
        }).catch(function(err) {
            console.log("Error:", err);
            return done(null, false, {
                message: 'Something went wrong with your signin'
            });
        });
    }
));

}