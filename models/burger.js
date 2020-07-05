var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(vals, cb) {
    orm.insertOne("burgers", vals, function(res) {
      cb;
    });
  },
  update: function(valOfCol, condition, cb) {
    orm.updateOne("burgers", valOfCol, condition, function(res) {
      cb;
    });
  }
};

// Export the database functions for the controller.
module.exports = burger;
