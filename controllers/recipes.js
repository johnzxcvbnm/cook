//--------------Dependencies----------------//
const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipes.js");
const testSeed = require("../models/testSeed.js");
const basicDataSeed = require("../models/basicDataSeed.js");

//--------------DELETE Routes----------------//
router.delete("/:id", (req, res) => {
  Recipe.findByIdAndRemove( req.params.id, (err) => {
    res.redirect("/recipe");
  });
});

// router.get("/deleteall", (req, res) => {
//   Recipe.remove({}, (err) => {
//     res.redirect("/");
//   });
// });

//--------------SEED Routes----------------//
// router.get("/testSeed", (req, res) => {
//   // res.send("Adding Seed Data");
//   Recipe.create(testSeed, (err, data) => {
//     res.send(data);
//     // res.redirect("/");
//   });
// });
//
// router.get("/basicdataseed", (req, res) => {
//   Recipe.create(basicDataSeed, (err, data) => {
//     res.send(data);
//   });
// });

//--------------POST Routes----------------//
router.post("/:id/addrating", (req, res) => {
  Recipe.findByIdAndUpdate( req.params.id, { $push: { ratings: req.body.rating } }, {new: true}, (err, myRecipe) => {
    let sum = 0;

    for(let i = 0; i < myRecipe.ratings.length; i++){
      sum += myRecipe.ratings[i];
    }

    sum = sum / myRecipe.ratings.length;
    sum = Math.floor( sum * 10) / 10;

    Recipe.findByIdAndUpdate( req.params.id, { avgRating: sum }, {new: true}, (err, newRecipe) => {
      // res.send(newRecipe);
      res.redirect(`/recipe/${req.params.id}`);
    });
  });
});

router.post("/:id/addcomment", (req, res) => {
  // res.send(req.body);
  Recipe.findByIdAndUpdate( req.params.id, { $push: { comments: req.body.comment } }, (err) => {
    res.redirect(`/recipe/${req.params.id}`);
  });
});

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

  if(typeof(req.body.tags) === "string"){
    req.body.tags = req.body.tags.toUpperCase();
  } else {
    req.body.tags = req.body.tags.map( (x) => {
      return x.toUpperCase();
    });
  }

  Recipe.create(req.body, (err, myRecipe) => {
    if(req.session.currentUser){
      res.redirect(`/users/${req.session.currentUser._id}/save/${myRecipe._id}`);
    } else {
      res.redirect(`/recipe/${myRecipe._id}`);
    }
  });
});

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

  if(typeof(req.body.tags) === "string"){
    req.body.tags = req.body.tags.toUpperCase();
  } else {
    req.body.tags = req.body.tags.map( (x) => {
      return x.toUpperCase();
    });
  }

  Recipe.findByIdAndUpdate( req.params.id, req.body, (err) => {
    res.redirect(`/recipe/${req.params.id}`);
  });
});

//--------------GET Routes----------------//
router.get("/index", (req, res) => {
  Recipe.find( {} ).sort( {name: 1} ).exec( (err, myRecipes) => {
    res.render("index.ejs", {
      recipes: myRecipes,
      currentUser: req.session.currentUser
    });
  });
});

router.get("/new", (req, res) => {
  res.render("recipes/new.ejs", {
    currentUser: req.session.currentUser
  });
});

router.get("/search", (req, res) => {
  res.render("recipes/search.ejs", {
    currentUser: req.session.currentUser
  });
});

router.get("/search/random", (req, res) => {
  Recipe.find( {}, (err, myRecipes) => {
    const myRandom = ( Math.floor( Math.random() * myRecipes.length ) );
    res.redirect(`/recipe/${myRecipes[myRandom].id}`);
  })
})

router.get("/:id/edit", (req, res) => {
  Recipe.findById(req.params.id, (err, myRecipe) => {
    res.render("recipes/edit.ejs", {
      recipe: myRecipe,
      currentUser: req.session.currentUser
    });
  });
});

router.get("/:id/save", (req, res) => {
  // 5b4649c6f1f8ce63e64d804b
  // 5b4649c6f1f8ce63e64d804b
  // req.session.currentUser["cookbook"].push(req.params.id);


  res.redirect(`/recipe/index`, {
    currentUser: req.session.currentUser
  });
});

router.get("/:id", (req, res) => {
  Recipe.findById(req.params.id, (err, myRecipe) => {
    res.render("recipes/show.ejs", {
      recipe: myRecipe,
      currentUser: req.session.currentUser
    });
  });
});

router.get("/", (req, res) => {
  res.redirect("/recipe/index");
});


//------------------Export-----------------//
module.exports = router;
