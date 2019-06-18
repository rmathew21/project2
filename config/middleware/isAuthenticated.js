// This is middleware for restricting routes to a user who's not logged in
module.exports = function(req, res, next) {
    // If the user isn't logged in, continue with request to restrict route
    if (req.user) {
        return next();
    }
    // If the user isn't logged in, redirect to login page
    return res.redirect("/");
};