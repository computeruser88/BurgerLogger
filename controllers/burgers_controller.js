var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

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
    console.log(req.body.burger_name);
    var newBurger = {
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    };
    burger.insertOne(newBurger,
    function(result) {
        res.json(result);
    });
});

router.put("/api/burgers/:id", function(req, res) {
    console.log("devoured: " + req.body.devoured);
    burger.updateOne(req.body.devoured, req.body.id, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.json(result);
        res.status(200).end();
    });
});

module.exports = router;
