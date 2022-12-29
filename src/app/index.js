const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const useragent = require("express-useragent")

require('dotenv').config();

const app = express();

const port = process.env.PORT || 3001;

// connect to database
const db = require('../config/database');

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors({ origin: true, credentials: true }));
app.use(useragent.express());

const city = require('../models/city.model');
city.getAll((err, data) => {
    if (err) {
        console.log(err);
    } else {
        app.get('/', (req, res) => {
            res.json({
                message: data
            });
        });
    }
});




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
