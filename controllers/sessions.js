//////////////////////////////////////////////
// Document contains all the routes for /session

const express = require("express");
const router = express.Router();
const User = require("../models/users.js");
const bcrypt = require("bcrypt");

//----------- DELETE Routes -------------//
//Route deletes current session and logs the user out
router.delete("/", (req, res) => {
  req.session.destroy( () => {
    res.redirect("/");
  });
});

//----------- POST Routes -------------//
//Route creates a new session upon successful login
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
//Route allows the user to log in and create a new session
router.get("/new", (req, res) => {
  res.render("sessions/new.ejs", {
    currentUser: req.session.currentUser,
    err: false
  });
});

module.exports = router;
