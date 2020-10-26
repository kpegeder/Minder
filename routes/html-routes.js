const express = require("express");

const router = express.Router();

const path = require("path");

const isAuthenticated = require("../config/middleware/isAuthenticated");

// Set up basic routes
router.get("/", function (req, res) {
  if (req.user) {
    res.redirect("/profile");
  }
  res.sendFile(path.join(__dirname, "../public/landing.html"));
});

router.get("/signin", function (req, res) {
  if (req.user) {
    res.redirect("/profile");
  }
  res.sendFile(path.join(__dirname, "../public/signin.html"));
});

router.get("/signup", function (req, res) {
  if (req.user) {
    res.redirect("/profile");
  }
  res.sendFile(path.join(__dirname, "../public/signup.html"));
});

router.get("/homepage", isAuthenticated, function (req, res) {
  res.sendFile(path.join(__dirname, "../public/homepage.html"));
});

// Route for /profile is in movies_db-routes

module.exports = router;
