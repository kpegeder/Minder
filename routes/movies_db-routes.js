const express = require("express");

const router = express.Router();

const db = require("../models");

const isAuthenticated = require("../config/middleware/isAuthenticated");

const { Op } = require("sequelize");

// Select all movies for a single account
router.get("/profile", isAuthenticated, function (req, res) {
  db.Movies.findAll({
    where: { AccountId: req.user.id },
  }).then(function (results) {
    res.render("index", { Movies: results });
  });
});

// Get movies of user
router.get("/api/compare", function (req, res) {
  db.Movies.findAll({
    where: { AccountId: req.user.id },
  }).then(function (results) {
    res.json(results);
  });
});

// Get movies of two people
router.get("/api/compareAll", function (req, res) {
  db.Movies.findAll({
    where: {
      [Op.or]: [
        { AccountId: req.query.friendID },
        { AccountId: req.query.userID },
      ],
    },
  }).then(function (results) {
    res.json(results);
  });
});

// Post movie to database
router.post("/api/movie", function (req, res) {
  db.Movies.create(req.body).then(function (results) {
    res.json(results);
  });
});

// Delete movie
router.delete("/api/movie/:id", function (req, res) {
  db.Movies.destroy({
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
