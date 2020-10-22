const express = require("express");

const router = express.Router();

const db = require("../models");

// Select all account for a single account
router.get("/api/account/:id", function (req, res) {
  db.Account.findAll({
    where: { AccountId: req.params.id },
  }).then(function (results) {
    res.json(results);
  });
});

// Unknown route
router.post("/api/account", function (req, res) {
  console.log(req.body);
  db.Account.create(req.body).then(function (results) {
    res.json(results);
  });
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
