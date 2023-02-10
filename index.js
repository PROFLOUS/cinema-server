const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const useragent = require("express-useragent");
const routes = require("./src/routes");
const https = require("https");
const fs = require("fs");
var path = require("path");
require("dotenv").config();
require("./src/config/redis");
// const FoodType = require('../_models/FoodType');
// const Food = require('../_models/Food');

const key = fs.readFileSync(path.resolve("ssl/private.key"));
const cert = fs.readFileSync(path.resolve("ssl/certificate.crt"));
const options = {
  key: key,
  cert: cert,
};

const app = express();
const httpsServer = https.createServer(options, app);
const port = process.env.PORT;

// connect to database
const db = require("./src/config/database");

const d = new Date();
const localTime = d.getTime();
const localOffset = d.getTimezoneOffset() * 60000;

const utc = localTime + localOffset;
const offset = 7; 
const vn = utc + 3600000 * offset;

const currentDate = new Date(vn).toLocaleTimeString();
console.log(currentDate);

const datatest = new Date().toLocaleTimeString();
console.log(datatest);


// db.sync({ alter: true });
db.sync();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors({ origin: true, credentials: true }));
app.use(useragent.express());
app.use(express.urlencoded({ extended: true }));
// routes
routes(app);

httpsServer.listen(3005);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
