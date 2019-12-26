const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const {apiRoutes} = require("./routes");
app.use(bodyParser.urlencoded({ extended: false }))
app.set("view engine", "pug");
app.use('/api/url', apiRoutes);
app.get("/", function(req, res) {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

app.listen(process.env.PORT || 3000);