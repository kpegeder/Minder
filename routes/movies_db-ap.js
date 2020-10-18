const express = require("express");

const router = express.Router();

const db = require("../models");

// Select all movies for a single account
router.get("/api/account/:id", function (req, res) {
  db.Movies.findAll({
    where: { AccountId: req.params.id },
  }).then(function (results) {
    res.json(results);
  });
});

// Unknown route
router.get("/", function (req, res) {
  db.Movies.create(req.body).then(function (results) {
    res.json(results);
  });
});

module.exports = router;
