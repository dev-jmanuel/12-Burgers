// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
 
  selectAll : (cb) => {

    orm.selectAll("burgers", (results)=>{
      cb(results);
    });

  },

  // The variables cols and vals are arrays.
  insertOne : (cols, vals, cb) => {

    // Execute orm Function to Post Data into Database
    orm.insertOne("burgers", cols, vals, (result)=>{
      console.log("Executing Insert One Model");
      cb(result);
    });

  },

  updateOne : (cols, vals, condition, cb) =>{

    console.log("Executing Update One Model");

    orm.updateOne("burgers", cols, vals, condition, (result)=>{
      console.log("Executing second declared callback");
      cb(result);
    });

  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
