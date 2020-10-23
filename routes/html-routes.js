const express = require("express");

const router = express.Router();

const path = require("path");

const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/landing.html"));
});

router.get("/homepage", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/homepage.html"));
});

router.get("/profile", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/profile.html"));
});

router.get("/signin", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/signin.html"));
});

router.get("/signup", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/signup.html"));
});

// Need to fix routes to retrict access

// router.get("/landing", function (req, res) {
//   res.sendFile(path.join(__dirname, "../public/landing.html"));
// });

// router.get("/", function (req, res) {
//   if (req.user) {
//     res.redirect("/profile");
//   }
//   res.sendFile(path.join(__dirname, "../public/landing.html"));
// });

// router.get("/profile", isAuthenticated, function (req, res) {
//   res.sendFile(path.join(__dirname, "../public/profile.html"));
// });

module.exports = router;
