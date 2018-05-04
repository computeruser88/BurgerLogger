var express = require("express");
var exphbs = require("express-handlebars");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var handlebarsObject = {
            burgers: data
        };
        res.render("index", handlebarsObject);
    });
});

router.post("/", function(req, res) {
    burger.insertOne([[req.body.burger_name, req.body.devoured],
    function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    var condition = "id=" + req.params.id;
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function() {
        res.redirect("/");
    });
});

module.exports = router;
