//--------------Dependencies----------------//
const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipes.js");
const testSeed = require("../models/testSeed.js");

//--------------Get Routes----------------//
router.get("/index", (req, res) => {
  res.render("index.ejs");
});

router.get("/", (req, res) => {
  res.redirect("/index");
});

router.get("/testSeed", (req, res) => {
  // res.send("Adding Seed Data");

  Recipe.create(testSeed, (err, data) => {
    res.send(data);
    // res.redirect("/");
  });
});

//------------------Export-----------------//
module.exports = router;
