//////////////////////////////////////////////
// Document contains all the ROUTES for "/recipe"

//--------------Dependencies----------------//
const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipes.js");
const testSeed = require("../models/testSeed.js");
const basicDataSeed = require("../models/basicDataSeed.js");

//--------------DELETE Routes----------------//
//Delete's the recipe at :id
router.delete("/:id", (req, res) => {
  Recipe.findByIdAndRemove( req.params.id, (err) => {
    res.redirect("/recipe");
  });
});

//Delete's all recipes.  Used to reset the data and re-seed
// router.get("/deleteall", (req, res) => {
//   Recipe.remove({}, (err) => {
//     res.redirect("/");
//   });
// });

//--------------SEED Routes----------------//
//Adds initial seed data to the collection.  Used for building the basic website
// router.get("/testSeed", (req, res) => {
//   // res.send("Adding Seed Data");
//   Recipe.create(testSeed, (err, data) => {
//     res.send(data);
//     // res.redirect("/");
//   });
// });
//
//Adds the majority of the seed data.  50 recipes to modify and play with.
// router.get("/basicdataseed", (req, res) => {
//   Recipe.create(basicDataSeed, (err, data) => {
//     res.send(data);
//   });
// });

//--------------POST Routes----------------//
//Adds a rating for the Recipe at :id
//Route pushes the rating onto the array then recalculates the average rating and updates it.
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

//Adds a comment to the recipe at :id
//Route pushes the new comment onto the comment array
router.post("/:id/addcomment", (req, res) => {
  // res.send(req.body);
  Recipe.findByIdAndUpdate( req.params.id, { $push: { comments: req.body.comment } }, (err) => {
    res.redirect(`/recipe/${req.params.id}`);
  });
});

router.post("/search", (req, res) => {
  // console.log(req.body);
  // res.send(req.body.search);
  console.log("MY BODY" + req.body.search);
  if(req.body.search === null){
    res.redirect("/recipe/search/-");
  } else {
    res.redirect(`/recipe/search/${req.body.search}`);
  }
  // res.redirect("/recipe/index");
  // res.render("recipes/index", {
  //   currentUser: req.session.currentUser
  // })
  // res.render("recipes/searchResults.ejs", {
  //   currentUser: req.session.currentUser
  // })
})

//Route creates a new recipe
router.post("/", (req, res) => {

  for(let i = req.body.tags.length - 1; i >= 0; i--){
    req.body.tags[i] = req.body.tags[i].replace(/\s+/g, '');
  }

  //This changes the protect variable from "on/off" to "true/false"
  if(req.body.protect === "on"){
    req.body.protect = true;
  } else {
    req.body.protect = false;
  }

  //All tags are in all CAPS
  //If type is STRING capitalize that STRING
  //Otherwise it's an array and capitalize all the STRINGS
  if(typeof(req.body.tags) === "string"){
    req.body.tags = req.body.tags.toUpperCase();
  } else {
    req.body.tags = req.body.tags.map( (x) => {
      return x.toUpperCase();
    });
  }

  //Create a new recipe from req.body
  Recipe.create(req.body, (err, myRecipe) => {
    //If the user is logged in, redirect to save the recipe
    //Otherwise redirect to the redirect to the new recipe
    if(req.session.currentUser){
      res.redirect(`/users/${req.session.currentUser._id}/save/${myRecipe._id}`);
    } else {
      res.redirect(`/recipe/${myRecipe._id}`);
    }
  });
});

//--------------PUT Routes----------------//
//Route edits a recipe
router.put("/:id", (req, res) => {
  // res.send(req.body);
  for(let i = req.body.tags.length - 1; i >= 0; i--){
    req.body.tags[i] = req.body.tags[i].replace(/\s+/g, '');
  }

  //Update the protect from "on/off" to "true/false"
  if(req.body.protect === "on"){
    req.body.protect = true;
  } else {
    req.body.protect = false;
  }

  //Capitalize all the tag STRINGs
  if(typeof(req.body.tags) === "string"){
    req.body.tags = req.body.tags.toUpperCase();
  } else {
    req.body.tags = req.body.tags.map( (x) => {
      return x.toUpperCase();
    });
  }

  //Update the selected recipe
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
  const fakeTags = [
    "DINNER",
    "LUNCH",
    "BREAKFAST",
    "EGGS",
    "HAM",
    "BACON",
    "LEMON",
    "GLUTENFREE",
    "GF",
    "CAKE",
    "DESSERT"
  ];

  fakeTags.sort();

  res.render("recipes/search.ejs", {
    currentUser: req.session.currentUser,
    tags: fakeTags
  });
});

router.get("/search/random", (req, res) => {
  Recipe.find( {}, (err, myRecipes) => {
    const myRandom = ( Math.floor( Math.random() * myRecipes.length ) );
    res.redirect(`/recipe/${myRecipes[myRandom].id}`);
  });
});

router.get("/search/:id", (req, res) => {
  const myArray = req.params.id.split("-");
  myArray.shift();
  myArray.pop();
  // res.send(myArray);
  Recipe.find( { 'tags': { $in: myArray } } ).sort( { name: 1 } ).exec( (err, myCookbook) => {
      // res.send(myCookbook);
      res.render("recipes/searchResults.ejs", {
        currentUser: req.session.currentUser,
        recipes: myCookbook
      });
  });

});

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
