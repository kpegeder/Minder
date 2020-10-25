const express = require("express");

const router = express.Router();

const db = require("../models");

const passport = require("../config/passport");

const { Op } = require("sequelize");

// Select all movies for a single account
router.get("/api/movie/", function (req, res) {
  db.Movies.findAll({
    // where: { AccountId: req.user.id },
  }).then(function (results) {
    res.render("index", { Movies: results });
  });
});

router.get("/api/movieAll", function (req, res) {
  db.Movies.findAll({
    where: { AccountId: req.user.id },
  }).then(function (results) {
    res.json(results);
  });
});

router.get("/api/compare", function (req, res) {
  console.log(req.query);
  db.Movies.findAll({
    where: {
      [Op.and]: [
        { AccountId: req.query.userId },
        { AccountId: req.query.friendId },
      ],
    },
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

// app.get("/", function(req, res) {
//   connection.query("SELECT * FROM tasks;", function(err, data) {
//     if (err) throw err;

//     // Test it
//     // console.log('The solution is: ', data);

//     // Test it
//     // return res.send(data);

//     res.render("index", { Movies: data });
//   });
// });
