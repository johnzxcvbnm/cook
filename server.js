//---------------Dependencies------------------//
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const mongoose = require("mongoose");
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/cookbook';

const session = require("express-session");
const methodOverride = require("method-override");
const bcrypt = require("bcrypt");

//-----------------Sessions----------------------//
app.use(session({
  secret: "feedmeseymour",
  resave: false,
  saveUninitialized: false
}));

//-----------------Middleware--------------------//
app.use( express.urlencoded( {extended: false} ) );
app.use( methodOverride( "_method" ) );
app.use( express.static( "public" ) );
app.use( express.static( "Javascript" ) );

//-----------------Controllers------------------//
const sessionsController = require("./controllers/sessions.js");
app.use("/sessions", sessionsController);

const usersController = require("./controllers/users.js");
app.use("/users", usersController);

const recipeControllers = require("./controllers/recipes.js");
app.use("/recipe", recipeControllers);



//-------------------Index---------------------//
app.get("/aboutus", (req, res) => {
  res.render("about.ejs", {
    currentUser: req.session.currentUser
  });
});

app.get("/", (req, res) => {
  res.redirect("recipe/index");
});

app.get("*", (req, res) => {
  res.render("404.ejs", {
    currentUser: req.session.currentUser
  });
});

//------------------Connections------------------//
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

mongoose.connect(mongoUri, { useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log("Connected to mongoose!!!!!!!!!");
});
