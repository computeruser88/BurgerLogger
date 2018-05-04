var orm = require("../config/orm");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },
    insertOne: function(value, callback) {
        orm.insertOne(burger_name, devoured, function(res){
            callback(res);
        })
    },
    updateOne: function(devoured, burgerId, callback) {
        orm.updateOne(burgerId, devoured, function(res){
            callback(res);
        });
    }
}

module.exports = burger;
