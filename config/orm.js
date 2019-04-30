// Import database connection
var connection = require("../config/connection.js");

// Helper function to convert object key/value pairs to SQL syntax
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Object for all our SQL statement functions.
const orm = {

  selectAll : (tableInput, cb) => {

    let strQuery = `SELECT * FROM ` + tableInput + `;`;

    connection.query(strQuery, (err, result)=>{
      if (err) throw err;
      cb(result);
    });

  },

  insertOne: (table, cols, vals, cb) => {

    let strCol = cols.toString();
    let sqlVal = printQuestionMarks(vals.length);
    let strQuery = `INSERT INTO  ` + table + ` (` + strCol; + `) VALUES (` + sqlVal + `);`;

    connection.query(strQuery, vals, (err, result) => {
      if (err) throw err;
      console.log("Sucesfully Added");
      cb(result);
    });

  },

  updateOne : (table, cols, vals, condition, cb) =>{

    let strCol = cols.toString();
    let strQuery = `UPDATE ` + table + ` SET ` + strCol; + ` = ? WHERE ` + condition;

    connection.query(strQuery, vals, (err, result) => {
      if (err) throw err;
      console.log("Sucesfully Updated");
      console.log("Executing third declared callback");
      cb(result);
    });

  }

}

// Export the orm object for the model (cat.js).
module.exports = orm;
