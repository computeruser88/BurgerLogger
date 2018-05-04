var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var handlebarsObject = {
            burgers: data
        };
        console.log(handlebarsObject);
        res.render("../views/index", handlebarsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([req.body.burger_name, req.body.devoured],
    function() {
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id=" + req.params.id;
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function() {
        res.redirect("/");
    });
});

module.exports = router;
