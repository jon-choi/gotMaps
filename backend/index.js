const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.listen(8800, () => {
  console.log("backend server is running!");
});
