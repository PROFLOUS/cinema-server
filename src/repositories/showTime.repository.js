const ShowTime = require("../models/ShowTime");

class ShowTimeRepository{

    async getShowTimes(){
        return await ShowTime.findAll();
    }
}

module.exports = new ShowTimeRepository();