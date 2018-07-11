const express = require("express");
const router = express.Router();
const User = require("../models/users.js");
const bcrypt = require("bcrypt");

//----------- Post Routes -------------//
router.post("/", (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  User.create(req.body, (err, newUser) => {
    res.redirect("/");
  });
});

//----------- Get Routes -------------//
router.get("/new", (req, res) => {
  res.render("users/new.ejs", {
    currentUser: req.session.currentUser
  });
});

router.get("/:id", (req, res) => {
  res.send("GETTING USER");
});

module.exports = router;
