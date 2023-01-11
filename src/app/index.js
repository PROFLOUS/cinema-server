const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const useragent = require("express-useragent")
const routes = require('../routes');
require('dotenv').config();
const initModels = require('../models/init-models');
const app = express();

const port = process.env.PORT || 3001;

// connect to database
const db = require('../config/database');
const models = initModels(db);

// models.Customer.findAll().then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });


// models.Ward.sync({focus:false}).then(() => {
//     console.log("District table created");
// }).catch((err) => {
//     console.log("District table not created",err);
// });



app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors({ origin: true, credentials: true }));
app.use(useragent.express());
app.use(express.urlencoded({ extended: true }));
// routes
routes(app);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
