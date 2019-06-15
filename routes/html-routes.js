const path = require("path");
module.exports = (function (app) {
    app.get("/", function (req, res) {
        //this code assumes home page is under public/home, edit if not
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
});