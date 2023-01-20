const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const useragent = require("express-useragent");
const routes = require("../routes");
const https = require("https");
const fs = require("fs");
var path = require('path');
require("dotenv").config();
// const FoodType = require('../_models/FoodType');
// const Food = require('../_models/Food');

const key = fs.readFileSync(path.resolve('ssl/server-key.pem'));
const cert = fs.readFileSync(path.resolve('ssl/server-cert.pem'));
const options = {
  key: key,
  cert: cert
};

const app = express();

const port = process.env.PORT;

// connect to database
const db = require("../config/database");

db.sync({ alter: true });

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors({ origin: true, credentials: true }));
app.use(useragent.express());
app.use(express.urlencoded({ extended: true }));
// routes
routes(app);



https.createServer(options, app).listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// });
