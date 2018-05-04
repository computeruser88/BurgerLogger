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
    burger.insertOne([req.body.burger_name, req.body.devoured],
    function(result) {
        res.json({ result });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var id = req.params.id;
    console.log("condition: " + condition);
    burger.updateOne({
        devoured: req.body.devoured
    }, id, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;
