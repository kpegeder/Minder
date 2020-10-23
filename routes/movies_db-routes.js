const express = require("express");

const router = express.Router();

const db = require("../models");

// Select all movies for a single account
router.get("/api/movie/", function (req, res) {
  db.Movies.findAll({
   
  }).then(function (results) {
    console.log(results[0]);
    res.render("index", { Movies: results });
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