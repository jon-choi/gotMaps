const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongoDB connected!");
  })
  .catch((err) => console.log(err));

app.listen(8800, () => {
  console.log("backend server is running!");
});
