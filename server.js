var express = require("express");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var logger = require("morgan");
var exphbs = require("express-handlebars");
// Require all models
var db = require("./models");
var router = express.Router();
var PORT = process.env.PORT || 3000;

var goku = {
  power: 9005
};

var app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/newsScraperDB";
mongoose.connect(MONGODB_URI);

app.get("/", function(req, res) {
  console.log("homepage get request recieved!");
  res.render("index", goku); //passing in dummy data i just want to render the homepage
  //with my three buttons
  //   res.send("hello world");
});

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
