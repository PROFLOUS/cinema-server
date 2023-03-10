const ShowTimeService = require("../services/showTime.service");

class ShowTimeController {
  async getShowTimes(req, res) {
    const showTimes = await ShowTimeService.getShowTimes();
    res.json(showTimes);
  }
}

module.exports = new ShowTimeController();
