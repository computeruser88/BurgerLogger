var orm = require("../config/orm");

var burger = {
    selectAll: function(callback) {
        orm.selectAll(function(res) {
            callback(res);
        });
    },
    insertOne: function(newBurger, callback) {
        orm.insertOne(newBurger, function(res){
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
