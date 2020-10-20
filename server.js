// Dependencies
require("dotenv").config();
const express = require("express");

// Set up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require("./models");

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Directory
app.use(express.static("public"));

// Import routes and give the server access to them
// Need to set up routes
const routesHTML = require("./routes/html-routes");
const routesMovie = require("./routes/movies_db-routes");

app.use(routesHTML);
app.use(routesMovie);

// Syncing our sequelize models and then starting our Express app
// {force:true} create a new table each time
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
