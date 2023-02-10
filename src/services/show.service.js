var axios = require('axios');
const ShowRepository = require("../repository/show.repository");


class ShowService {
  async getAllShow() {
    return await ShowRepository.getAllShow();
  }

  async getShowById(id) {
    return await ShowRepository.getShowById(id);
  }

  async getShowByMovieId(req) {
    const data = await ShowRepository.getShowByMovieId(req);

    const currentDate = new Date().toLocaleTimeString();
    const currentTime =  this.convertTime12to24(currentDate);

    let showTimesIsNull = [];
    data.forEach((item) => {
      let showTimes = [];

      item.showTime.forEach((time) => {

        if (time > currentTime) {
          showTimes.push(time);
        }
      });
      item.showTime = showTimes;
      
      if(item.showTime.length === 0) {
        showTimesIsNull.push(item);
      }
      
    });

    data.forEach((item) => {
      showTimesIsNull.forEach((item2) => {
        if(item.id === item2.id) {
          const i = data.indexOf(item);
          data.splice(i, 1);
        }
      })
    })


    return data;
  }

  async getShowByCinemaId(req) {
    const data = await ShowRepository.getShowByCinemaId(req);

    const currentDate = new Date().toLocaleTimeString();
    const currentTime = this.convertTime12to24(currentDate);

    let showTimesIsNull = [];
    
    data.forEach((item) => {
      let showTimes = [];

      item.showTime.forEach((time) => {
        if (time > currentTime) {
          showTimes.push(time);
        }
      });
      item.showTime = showTimes;

      if(item.showTime.length === 0) {
        showTimesIsNull.push(item);
      }
      
    })

    data.forEach((item) => {
      showTimesIsNull.forEach((item2) => {
        if(item.id === item2.id) {
          const i = data.indexOf(item);
          data.splice(i, 1);
        }
      })
    })

    

    return data;
  }

  async createShow(show) {
    return await ShowRepository.createShow(show);
  }

  async updateShow(id, show) {
    await ShowRepository.updateShow(id, show);
    return { message: "Update success" };
  }

  async deleteShow(id) {
    await ShowRepository.deleteShow(id);
    return { message: "Delete success" };
  }

  convertTime12to24 (time12h) {
    const [time, modifier] = time12h.split(' ');
  
    let [hours, minutes] = time.split(':');
  
    if (hours === '12') {
      hours = '00';
    }
  
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
  
    return `${hours}:${minutes}`;
  }
}

module.exports = new ShowService();
