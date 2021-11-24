const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/myapp", { useNewUrlParser: true });

app.listen(8800, () => {
  console.log("backend server is running!");
});
