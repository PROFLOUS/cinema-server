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
    
    

    var date = new Date();

// convert to milliseconds, add local time zone offset and get UTC time in milliseconds
var utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);

// time offset for New Zealand is +12
var timeOffset = 7;

// create new Date object for a different timezone using supplied its GMT offset.
var currentDate = new Date(utcTime + (3600000 * timeOffset));

    // const currentDate = new Date(vn).toLocaleTimeString();

    const datee = await this.convertTime12to24(currentDate);
    console.log("datee", datee);

    
    data.forEach((item) => {
      let showTimes = [];
      console.log("showtime",item.id,item.showTime);

      item.showTime.forEach((time) => {
        console.log("time", time);
        console.log("currentDate", datee);
        if (time > datee) {
          console.log("timess",time);
          showTimes.push(time);
        }
      });
      console.log("showtimes",showTimes);
      item.showTime = showTimes;

      const i = data.indexOf(item);
      if(item.showTime.length === 0) {
        data.splice(i, 1);
      }
      
    });

    return data;
  }

  async getShowByCinemaId(req) {
    const data = await ShowRepository.getShowByCinemaId(req);
    let currentDate = new Date().toLocaleTimeString();
    const datee = await this.convertTime12to24(currentDate);
    console.log("datee", datee);
    
    data.forEach((item) => {
      let showTimes = [];
      console.log("showtime",item.id,item.showTime);

      item.showTime.forEach((time) => {
        console.log("time", time);
        console.log("currentDate", datee);
        if (time > datee) {
          console.log("timess",time);
          showTimes.push(time);
        }
      });
      console.log("showtimes",showTimes);
      item.showTime = showTimes;

      const i = data.indexOf(item);
      console.log("i",i);

      if(item.showTime.length === 0) {
        data.splice(i, 1);
      }
      
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

  async convertTime12to24 (time12h) {
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
