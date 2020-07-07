const connection = require("./connection.js");

const orm = {
  selectAll: function(table, cb) {
    connection.query("SELECT * FROM burgers;", function (err, data) {
      if (err) {
        console.log("Select all not working.");
      }
      cb(data);
    });
  },
    insertOne: function(table, col, name, cb){
        connection.query("INSERT INTO ?? (??) VALUES (?)",
        [table, col, name], function(err, data) {
            if (err) {
              console.log("orm insert not working")
            }
            console.log(name + " orm line 18")
            cb(data);
          });
      
    
    },
    updateOne: function(valOfCol, condition, cb){
        var queryUpdate = "UPDATE burgers SET ?? WHERE devoured = ??;";
        connection.query(queryUpdate, valOfCol, condition, function(err, data) {
          if (err) {
            console.log("orm update not working")
          }
          console.log(data + " orm line 30")
          cb(data);
        });  
    }
}

// export to burger.js
module.exports = orm