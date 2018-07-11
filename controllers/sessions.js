const express = require("express");
const router = express.Router();
const User = require("../models/users.js");
const bcrypt = require("bcrypt");

//----------- DELETE Routes -------------//
router.delete("/", (req, res) => {
  req.session.destroy( () => {
    res.redirect("/");
  });
});

//----------- POST Routes -------------//
router.post("/", (req, res) => {
  User.findOne( { username: req.body.username }, (err, foundUser) => {
    if(foundUser === null){
      // res.send("No such user");
      res.render("sessions/new.ejs", {
        currentUser: req.session.currentUser,
        err: true
      });
    } else {
      if( bcrypt.compareSync( req.body.password, foundUser.password) ){
        req.session.currentUser = foundUser;
        // res.send(req.session.currentUser);
        res.redirect("/");
      } else {
        res.render("sessions/new.ejs", {
          currentUser: req.session.currentUser,
          err: true
        });
      }
    }
  });
});

//----------- GET Routes -------------//
router.get("/new", (req, res) => {
  res.render("sessions/new.ejs", {
    currentUser: req.session.currentUser,
    err: false
  });
});

module.exports = router;
