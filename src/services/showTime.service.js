const ShowTimeRepository = require("../repositories/showTime.repository");

class ShowTimeService {
  async getShowTimes() {
    return await ShowTimeRepository.getShowTimes();
  }
}

module.exports = new ShowTimeService();
