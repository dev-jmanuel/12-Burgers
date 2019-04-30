// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

// Set up the Express App 
const app = express();
const PORT = process.env.PORT || 8080;

// Set up static content for the app
app.use(express.static("public"));

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main",  partialsDir  : [ path.join(__dirname, 'views/partials')] }));
app.set("view engine", "handlebars");

// Link to routing
require("./controllers/burgers_controller.js")(app);
// var routes = require("./controllers/burgers_controller.js");

// app.use(routes);

// Start the server to begin listening
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);

});
