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

const file = fs.readFileSync(
  path.resolve("1C51E7CEA5638CAE1AB83102DD479B75.txt")
);

// const key = fs.readFileSync(path.resolve("ssl/private.key"));
// const cert = fs.readFileSync(path.resolve("ssl/certificate.crt"));
// const options = {
//   key: key,
//   cert: cert,
// };

const app = express();
// const httpsServer = https.createServer(options, app);
const port = process.env.PORT;

// connect to database
const db = require("./src/config/database");

// db.sync({ alter: true });
db.sync();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors({ origin: true, credentials: true }));
app.use(useragent.express());
app.use(express.urlencoded({ extended: true }));
// routes
// routes(app);
app.get(
  "/.well-known/pki-validation/1C51E7CEA5638CAE1AB83102DD479B75.txt",
  (req, res) => {
    res.sendFile('1C51E7CEA5638CAE1AB83102DD479B75.txt', { root: __dirname });
  }
);

// httpsServer.listen(3005);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
