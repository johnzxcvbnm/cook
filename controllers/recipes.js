//--------------Dependencies----------------//
const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipes.js");
const testSeed = require("../models/testSeed.js");

//--------------Get Routes----------------//
router.get("/index", (req, res) => {
  Recipe.find( {}, (err, myRecipes) => {
    res.render("index.ejs", {
      recipes: myRecipes
    });
  });
});

router.get("/testSeed", (req, res) => {
  // res.send("Adding Seed Data");

  Recipe.create(testSeed, (err, data) => {
    res.send(data);
    // res.redirect("/");
  });
});

router.get("/:id", (req, res) => {
  Recipe.findById(req.params.id, (err, myRecipe) => {
    res.render("recipes/show.ejs", {
      recipe: myRecipe
    });
  });
});

router.get("/", (req, res) => {
  res.redirect("/recipe/index");
});


//------------------Export-----------------//
module.exports = router;
