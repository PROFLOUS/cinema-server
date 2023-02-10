var axios = require('axios');
const ShowRepository = require("../repository/show.repository");

var config = {
  method: 'get',
  url: 'https://worldtimeapi.org/api/timezone/Asia/Bangkok',
  headers: { }
};



class ShowService {
  async getAllShow() {
    return await ShowRepository.getAllShow();
  }

  async getShowById(id) {
    return await ShowRepository.getShowById(id);
  }

  async getShowByMovieId(req) {
    const data = await ShowRepository.getShowByMovieId(req);

  
    const getDate = await axios(config)

    const currentDate = new Date(getDate.data.datetime).toLocaleTimeString();

    const datee = await this.convertTime12to24(currentDate);
    console.log("datee", datee);

    let showTimesIsNull = [];
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
      
      if(item.showTime.length === 0) {
        showTimesIsNull.push(item);
      }
      
    });

    console.log("showTimesIsNull",showTimesIsNull);

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
    const getDate = await axios(config)
    const currentDate = new Date(getDate.data.datetime).toLocaleTimeString();
    const datee = await this.convertTime12to24(currentDate);
    console.log("datee", datee);
    let showTimesIsNull = [];
    
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
        showTimesIsNull.push(item);
      }
      
    })

    console.log("showTimesIsNull",showTimesIsNull);

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
