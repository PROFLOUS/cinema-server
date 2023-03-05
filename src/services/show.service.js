var axios = require("axios");
const ShowRepository = require("../repositories/show.repository");
const moment = require("moment");

class ShowService {
  async getAllShow() {
    const data = await ShowRepository.getAllShow();
    const currentDate = new Date().toLocaleTimeString();
    const currentTime = this.convertTime12to24(currentDate);
    const endTimes = data.map((item, index) => {
      const duration = item.Movie.duration + 30;
      const showTime = this.convertTime12to24(item.showTime);
      const endTime = moment(showTime, "HH:mm")
        .add(duration, "minutes")
        .format("HH:mm");
      return endTime;
    });

    data.map(async(item, index) => {
      item.dataValues.endTime = endTimes[index];
      const check = await this.checkShowTimeIsPassed(item.id);
      if (check === 1) {
        await ShowRepository.updateShow(item.id, {
          status: 1,
        });
      }else if(check === 2){
        await ShowRepository.updateShow(item.id, {
          status: 2,
        });
      }else if(check === 3){
        await ShowRepository.updateShow(item.id, {
          status: 3,
        });
      }

      


      
    });

    return data;
  }

  async getShowById(id) {
    return await ShowRepository.getShowById(id);
  }

  async getShowByMovieId(req) {
    const data = await ShowRepository.getShowByMovieId(req);

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

      if (item.showTime.length === 0) {
        showTimesIsNull.push(item);
      }
    });

    data.forEach((item) => {
      showTimesIsNull.forEach((item2) => {
        if (item.id === item2.id) {
          const i = data.indexOf(item);
          data.splice(i, 1);
        }
      });
    });

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

      if (item.showTime.length === 0) {
        showTimesIsNull.push(item);
      }
    });

    data.forEach((item) => {
      showTimesIsNull.forEach((item2) => {
        if (item.id === item2.id) {
          const i = data.indexOf(item);
          data.splice(i, 1);
        }
      });
    });

    return data;
  }

  async createShow(show) {
    console.log("show", show.showTime);
    const showDate = new Date(show.showDate);
    const isExist = await this.checkIsShowTimeExist(
      show.showTime,
      show.idMovie,
      show.idCinemaHall,
      showDate,
      show.idCinema
    );
    if (isExist) {
      return isExist;
    }
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

  async checkIsShowTimeExist(
    showTime,
    idMovie,
    idCinemaHall,
    showDate,
    idCinema
  ) {
    const rs = await ShowRepository.checkIsShowTimeExist(
      showTime,
      idMovie,
      idCinemaHall,
      showDate,
      idCinema
    );
    console.log("rs", rs);
    if (rs) {
      return {
        message: "Show time is exist",
      };
    }
    return null;
  }

  async checkShowTimeIsPassed(id) {
    const data = await ShowRepository.getShowById(id);
    const currentDateTime = new Date().toLocaleTimeString();
    const currentTime = this.convertTime12to24(currentDateTime);
    const currentDate = moment().format("YYYY-MM-DD");
    const showDate = moment(data.showDate).format("YYYY-MM-DD");
    const showTime = this.convertTime12to24(data.showTime);
    const duration = data.Movie.duration + 30;
    const endTime = moment(showTime, "HH:mm")
      .add(duration, "minutes")
      .format("HH:mm");

    console.log("showTime", showTime);
    console.log("crTime", currentTime);
    console.log("endTime", endTime);
    if(showDate === currentDate){
      if(showTime < currentTime){
        return 3;
      }else if( currentTime > showTime && currentTime < endTime){
        return 1;
      }else if(showTime > currentTime && endTime > currentTime){
        return 2;
      }
    }else if(showDate < currentDate){
      return 3;
    }else if(showDate > currentDate){
      return 2;
    }
  }

  convertTime12to24(time12h) {
    const [time, modifier] = time12h.split(" ");

    let [hours, minutes] = time.split(":");

    if (hours === "12") {
      hours = "00";
    }

    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
  }
}

module.exports = new ShowService();
