const connection = require("./connection.js");

const orm = {
  selectAll: (table, cb) => {
    connection.query("SELECT * FROM burgers;", function (err, data) {
      if (err) {
        console.log("Select all not working.");
        console.log(data + " orm line 8");
      }
      cb(data);
    });
  },
    insertOne: function(cols, vals, cb){
        let queryInsert = "INSERT INTO burgers";
        queryInsert += " (";
        queryInsert += cols.toString();
        queryInsert += ") ";
        queryInsert += "VALUES (?)";
        connection.query(queryInsert, vals, function(err, data) {
            if (err) {
              throw err;
            }
            console.log(data)
            cb(data);
          });
      
    
    },
    updateOne: function(valOfCol, condition, cb){
        var queryUpdate = "UPDATE burgers SET ?? WHERE devoured = ??;";
        connection.query(queryUpdate, function(err, data) {
          if (err) {
            throw err;
          }
          cb(data);
        });  
    }
}

// export to burger.js
module.exports = orm