const express = require("express");

const router = express.Router();

const db = require("../models");

// Select all movies for a single account
router.get("/api/movie/", function (req, res) {
  db.Movies.findAll({
    // where: { AccountId: req.params.id
    // },
  }).then(function (results) {
    res.json(results);
  });
});

// Unknown route
router.post("/api/movie", function (req, res) {
  console.log(req.body);
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
