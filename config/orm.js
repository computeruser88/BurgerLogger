var connection = require("./connection.js");

var burgerDbFunctions = {
    selectAll(): () => {
        connection.query("SELECT * FROM burgers", function (err, res) {
            if (err) throw err;
            for (var i = 0; i < res.length; i++) {
                console.log(res[i].id + " " + res[i].burger_name + " " + res[i].devoured);
            }
        });
    },
    insertOne(): (burgerName, devoured) => {
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES ?", 
        {
            burger_name: burgerName,
            devoured: devoured
        }, 
        function (err, res) {
            if (err) throw err;
            console.log(burgerName + " inserted...");
        });
    },
    updateOne(): (burgerId, devoured) => {
        connection.query("", function (err, res) {
            if (err) throw err;
            console.log(burgerId + " devoured: " + devoured);
        });
    }
};

module.exports = burgerDbFunctions;