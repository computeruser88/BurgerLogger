var express = require("express");
var bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;

var app = express();

app.listen(PORT, function() {
    console.log("Burger Logger app listening on port " + PORT);
})
