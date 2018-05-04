var connection = require("./connection");

var orm = {
    selectAll: () => {
        connection.query("SELECT * FROM burgers", function (err, res) {
            if (err) throw err;
            console.log(res);
            return res;
        });
    },
    insertOne: (burgerName, devoured) => {
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
    updateOne: (burgerId, devoured) => {
        connection.query("UPDATE burgers SET devoured=? WHERE id=?", [devoured, burgerId], function (err, res) {
            if (err) throw err;
            console.log(burgerId + " devoured: " + devoured);
        });
    }
};

module.exports = orm;