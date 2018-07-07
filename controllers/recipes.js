//--------------Dependencies----------------//
const express = require("express");
const router = express.Router();
//Recipe Schema

//--------------Get Routes----------------//
router.get("/index", (req, res) => {
  res.render("index.ejs");
});

router.get("/", (req, res) => {
  res.redirect("/index");
});

//------------------Export-----------------//
module.exports = router;
