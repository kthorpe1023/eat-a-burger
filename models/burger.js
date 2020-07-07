var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(table, col, name, cb) {
    orm.insertOne("burgers", "name", name, function(res) {
      console.log(name + " burger.js line 12")
      cb(res);
    });
  },
  update: function(valOfCol, condition, cb) {
    orm.updateOne("burgers", valOfCol, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb){
    orm.deleteOne("burgers", condition, function(res){
      cb(res)
    })
  }
};

// Export the database functions for the controller.
module.exports = burger;
