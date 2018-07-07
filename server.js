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

//-----------------Middleware--------------------//
app.use( express.urlencoded( {extended: false} ) );
app.use( methodOverride( "_method" ) );
app.use( express.static( "public" ) );

//-----------------Controllers------------------//

//-------------------Index---------------------//
app.get("/", (req, res) => {
  res.send("This Still Works");
});


//------------------Connections------------------//
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

mongoose.connect(mongoUri, { useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log("Connected to mongoose!!!!!!!!!");
});
