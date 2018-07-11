const express = require("express");
const router = express.Router();
const User = require("../models/users.js");
const bcrypt = require("bcrypt");
const Recipe = require("../models/recipes.js");

//----------- Post Routes -------------//
router.post("/", (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  User.create(req.body, (err, newUser) => {
    req.session.currentUser = newUser;
    res.redirect("/");
  });
});

//----------- Get Routes -------------//
router.get("/:userId/save/:id", (req,res) => {
  User.findByIdAndUpdate( req.params.userId, { $push: { cookbook: req.params.id } }, {new: true}, (err, updated) => {
    // res.send(updated);
    req.session.currentUser.cookbook = updated.cookbook;
    res.redirect(`/users/${req.params.userId}`);
  });
});

router.get("/:userId/delete/:id", (req, res) => {
  User.findByIdAndUpdate( req.params.userId, { $pull: { cookbook: req.params.id } }, (err, updated) => {
    req.session.currentUser.cookbook = updated.cookbook;
    res.redirect(`/users/${req.params.userId}`);
  });
});

router.get("/session", (req, res) => {
  res.send(req.session.currentUser);
});

router.get("/new", (req, res) => {
  res.render("users/new.ejs", {
    currentUser: req.session.currentUser
  });
});

router.get("/:id", (req, res) => {
  User.findById(req.params.id, (err, myUser) => {
    Recipe.find( { '_id': { $in: myUser.cookbook } } ).sort( { name: 1 } ).exec( (err, myCookbook) => {
        // res.send(myCookbook);
        res.render("users/show.ejs", {
          foundUser: myUser,
          currentUser: req.session.currentUser,
          recipes: myCookbook
        });
    });
  });
});

module.exports = router;
