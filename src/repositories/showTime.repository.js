const ShowTime = require("../models/showTime");

class ShowTimeRepository{

    async getShowTimes(){
        return await ShowTime.findAll();
    }
}

module.exports = new ShowTimeRepository();