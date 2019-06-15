const express = require("express");
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 8080;
require("./config/connection.js")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
require("./routes/html-routes.js")(app);
app.listen(PORT, function () {
    console.log("App listening on port" + PORT);
});