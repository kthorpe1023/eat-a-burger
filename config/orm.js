const connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  

const orm = {
    selectAll: function(cb){
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });    
    },
    insertOne: function(cols, vals, cb){
        let queryInsert = "INSERT INTO burgers";
        queryInsert += " (";
        queryInsert += cols.toString();
        queryInsert += ") ";
        queryInsert += "VALUES (";
        queryInsert += printQuestionMarks(vals.length);
        queryInsert += ") ";
        connection.query(queryInsert, vals, function(err, result) {
            if (err) {
              throw err;
            }
      
            cb(result);
          });
      
    
    },
    updateOne: function(valOfCol, cb){
        var queryUpdate = "SELECT * FROM burgers WHERE devoured = ??;";
        connection.query(queryUpdate, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });  
    }
}

module.exports = orm