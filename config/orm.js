const connection = require("./connection.js");

const orm = {
  selectAll: (table, cb) => {
    connection.query("SELECT * FROM burgers;", function (err, data) {
      if (err) {
        console.log("Select all not working.");
      }
      cb(data);
    });
  },
    insertOne: function(table, vals, cb){
        connection.query("INSERT INTO ?? SET ?",
        [{ table }, { burger: vals}], function(err, data) {
            if (err) {
              console.log("orm insert not working")
            }
            console.log(data)
            cb(data);
          });
      
    
    },
    updateOne: function(valOfCol, condition, cb){
        var queryUpdate = "UPDATE burgers SET ${valOfCol} WHERE devoured = ${condition};";
        connection.query(queryUpdate, function(err, data) {
          if (err) {
            console.log("orm update not working")
          }
          cb(data);
        });  
    }
}

// export to burger.js
module.exports = orm