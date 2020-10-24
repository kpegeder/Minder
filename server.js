// Dependencies
require("dotenv").config();
const express = require("express");
const session = require("express-session");

// Require passport from config
const passport = require("./config/passport");

// Set up the Port
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require("./models");

// Set up the Express app to handle data parsing
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Directory
app.use(express.static("public"));

// Set Handlebars.
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "profile" }));
app.set("view engine", "handlebars");

// Session to track user login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Import routes and give the server access to them
const routesHTML = require("./routes/html-routes");
const routesMovie = require("./routes/movies_db-routes");
const routesAccount = require("./routes/account-api-routes");

app.use(routesHTML);
app.use(routesMovie);
app.use(routesAccount);

// Syncing our sequelize models and then starting our Express app
// {force:true} create a new table each time
db.sequelize.sync({force:true}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
