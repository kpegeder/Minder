// Dependencies
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
app.use(expres.static("public"));

// Import routes and give the server access to them
// Need to set up routes
const routes = require();

app.use(routes);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
