const express = require("express");

const router = express.Router();

const db = require("../models");

const passport = require("../config/passport");

// Select all account for a single account
router.get("/api/account", function (req, res) {
  db.Account.findAll({}).then(function (results) {
    res.json(results);
  });
});

// Sign in
router.post("/api/login", passport.authenticate("local"), function (req, res) {
  res.json(req.user);
});

// Sign up
router.post("/api/signup", function (req, res) {
  db.Account.create(req.body)
    .then(function () {
      res.redirect(307, "/api/login");
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
});

// Route for getting some user data
router.get("/api/account_data", function (req, res) {
  if (!req.user) {
    res.json({});
  } else {
    res.json({ username: req.user.username, id: req.user.id });
  }
});

// Route for logging user out
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

// Delete movie
router.delete("/api/account/:id", function (req, res) {
  db.Account.destroy({
    where: { id: req.params.id },
  }).then(function (result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
