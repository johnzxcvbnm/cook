//--------------Dependencies----------------//
const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipes.js");
const testSeed = require("../models/testSeed.js");

//--------------DELETE Routes----------------//
router.delete("/:id", (req, res) => {
  Recipe.findByIdAndRemove( req.params.id, (err) => {
    res.redirect("/recipe");
  });
});


//--------------POST Routes----------------//
router.post("/", (req, res) => {
  for(let i = req.body.tags.length - 1; i >= 0; i--){
    req.body.tags[i] = req.body.tags[i].replace(/\s+/g, '');

    if(req.body.tags[i] === ""){
      req.body.tags.splice(i, 1);
    }
  }

  for(let i = req.body.images.length - 1; i >= 0; i--){
    req.body.images[i] = req.body.images[i].replace(/\s/g, '');

    if(req.body.images[i] === ""){
      req.body.images.splice(i, 1);
    }
  }

  for(let i = req.body.ingredients.length - 1; i >= 0; i--){
    // req.body.ingredients[i] = req.body.ingredients[i].replace(/\s/g, '');

    if(req.body.ingredients[i] === ""){
      req.body.ingredients.splice(i, 1);
    }
  }

  for(let i = req.body.directions.length - 1; i >= 0; i--){
    // req.body.directions[i] = req.body.directions[i].replace(/\s/g, '');

    if(req.body.directions[i] === ""){
      req.body.directions.splice(i, 1);
    }
  }

  if(req.body.protect === "on"){
    req.body.protect = true;
  } else {
    req.body.protect = false;
  }

  // Recipe.findByIdAndUpdate( req.params.id, req.body, (err) => {
  //   res.redirect(`/recipe/${req.params.id}`);
  // });

  Recipe.create(req.body, (err, myRecipe) => {
    res.redirect(`/recipe/${myRecipe.id}`);
  })
})

//--------------PUT Routes----------------//
router.put("/:id", (req, res) => {
  // res.send(req.body);
  for(let i = req.body.tags.length - 1; i >= 0; i--){
    req.body.tags[i] = req.body.tags[i].replace(/\s+/g, '');

    if(req.body.tags[i] === ""){
      req.body.tags.splice(i, 1);
    }
  }

  for(let i = req.body.images.length - 1; i >= 0; i--){
    req.body.images[i] = req.body.images[i].replace(/\s/g, '');

    if(req.body.images[i] === ""){
      req.body.images.splice(i, 1);
    }
  }

  for(let i = req.body.ingredients.length - 1; i >= 0; i--){
    // req.body.ingredients[i] = req.body.ingredients[i].replace(/\s/g, '');

    if(req.body.ingredients[i] === ""){
      req.body.ingredients.splice(i, 1);
    }
  }

  for(let i = req.body.directions.length - 1; i >= 0; i--){
    // req.body.directions[i] = req.body.directions[i].replace(/\s/g, '');

    if(req.body.directions[i] === ""){
      req.body.directions.splice(i, 1);
    }
  }

  if(req.body.protect === "on"){
    req.body.protect = true;
  } else {
    req.body.protect = false;
  }

  Recipe.findByIdAndUpdate( req.params.id, req.body, (err) => {
    res.redirect(`/recipe/${req.params.id}`);
  });
});

//--------------GET Routes----------------//
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

router.get("/new", (req, res) => {
  res.render("recipes/new.ejs");
});

router.get("/deleteall", (req, res) => {
  res.send("EVERYTHING DELETED");
})

router.get("/:id/edit", (req, res) => {
  Recipe.findById(req.params.id, (err, myRecipe) => {
    res.render("recipes/edit.ejs", {
      recipe: myRecipe
    });
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
