const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
require("./config/connection.js")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(PORT, function () {
    console.log("App listening on port" + PORT);
});