var connection = require("../config/connection");

var orm = {
    selectAll: (callback) => {
        connection.query("SELECT * FROM burgers", function (err, res) {
            if (err) throw err;
            console.log(res);
            callback(res);
        });
    },
    insertOne: (newBurger, callback) => {
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES ?",
            newBurger,
            function (err, res) {
                if (err) throw err;
                console.log(res.body.burger_name + " inserted...");
                callback(res);
            });
    },
    updateOne: (burgerId, devoured, callback) => {
        devoured = parseInt(devoured);
        burgerId = parseInt(burgerId);
        connection.query("UPDATE burgers SET devoured=? WHERE id=?", [devoured, burgerId], function (err, res) {
            if (err) throw err;
            console.log(burgerId + " devoured: " + devoured);
            callback(res);
        });
    }
};

module.exports = orm;