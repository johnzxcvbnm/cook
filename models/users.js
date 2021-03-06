const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  username: {type: String, unique: true},
  password: String,
  cookbook: []
});

module.exports = mongoose.model("User", userSchema);
