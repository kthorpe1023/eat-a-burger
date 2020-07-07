const connection = require("./connection.js");

function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}


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
    updateOne: function(table, valOfCol, condition, cb){
        var queryUpdate = "UPDATE " + table;
        queryUpdate +=" SET ";
        queryUpdate += objToSql(valOfCol);
        queryUpdate += " WHERE ";
        queryUpdate += condition;
        console.log(queryUpdate)
        connection.query(queryUpdate, function(err, data) {
          if (err) {
            console.log("orm update not working")
          }
          // console.log(data + " orm line 30")
          cb(data);
        });  
    }
}

// export to burger.js
module.exports = orm