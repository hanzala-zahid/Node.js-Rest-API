const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
require("dotenv/config");

//Middle wares
app.use(cors());
app.use(bodyParser.json());

//Import routes

const postsRoute = require("./routes/posts");

app.use("./posts", postsRoute);

//Routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

app.get("/posts", (req, res) => {
  res.send("We are on post");
});

//Connect To DB
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to db");
});

//How to we start listening to the server

app.listen(3000);
