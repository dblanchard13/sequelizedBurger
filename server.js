var express = require('express');
var exphbs = require('express-handlebars');
var path = require("path");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var app = express();
var router = require("./controllers/burgers_controller.js");
var PORT = process.env.PORT || 3080;
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use('/', router);

app.listen(PORT);