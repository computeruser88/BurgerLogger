var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },
    insertOne: function(value, callback) {
        orm.insertOne("burgers", "burger_name", value, function(res){
            callback(res);
        })
    },
    updateOne: function(columnValue, condition, callback) {
        orm.updateOne("burgers", "devoured", "columnValue", "id", condition, function(res){
            callback(res);
        });
    }
}

module.exports = burger;
