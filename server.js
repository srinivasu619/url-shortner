const express = require("express");
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const {apiRoutes, appRoutes} = require("./routes");
app.use(bodyParser.urlencoded({ extended: false }))
app.set("view engine", "pug");
app.use('/', appRoutes);
app.use('/api/url', apiRoutes);

app.listen(3000);