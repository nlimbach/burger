var orm = require("../config/orm.js");

// Find all the pets ordering by the lowest price to the highest price.


orm.selectAll("burgers");

// Find a pet in the pets table by an animal_name of Rachel.
orm.updateOne("burgers", oldValue, newValue, id);

// Find the buyer with the most pets.
orm.insertOne("burgers", burgerName, devoured);