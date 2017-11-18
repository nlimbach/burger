var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
    selectAll: function(tableName) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, result) {
            console.log(result);
        });
    },
    insertOne: function(tableName, burgerName, devoured) {
        var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (??, ??)";
        console.log(queryString);
        connection.query(queryString, [tableName, burgerName, devoured], function(err, result) {
            console.log(result);
        });
    },
    updateOne: function(tableName, oldValue, newValue, id) {
        var queryString = "UPDATE ?? SET ?? = ?? WHERE id = ??";
        connection.query(queryString, [tableName, oldValue, newValue, id], function(err, result) {
            console.log(result);
        });
    },
};

module.exports = orm;
