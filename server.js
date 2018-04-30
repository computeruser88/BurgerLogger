var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;

var app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
    console.log("Burger Logger app listening on port " + PORT);
})
