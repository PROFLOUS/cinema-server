const ShowTimeController = require("../controllers/showTime.controller");
const router = require("express").Router();

router.get("/", ShowTimeController.getShowTimes);

module.exports = router;
