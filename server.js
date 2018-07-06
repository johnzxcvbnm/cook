const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const mongoose = require("mongoose");
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/cookbook';


app.get("/", (req, res) => {
  res.send("This Works");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

mongoose.connect(mongoUri, { useNewUrlParser: true } );
mongoose.connection.once("open", () => {
  console.log("Connected to mongoose!!!!!!!!!");
});
