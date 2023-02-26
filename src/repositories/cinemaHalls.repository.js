const CinemaHall = require("../models/CinemaHall");

class CinemaHallRepository {
  async getAllCinemaHall() {
    return await CinemaHall.findAll();
  }

  async getCinemaHallById(id) {
    return await CinemaHall.findOne({
      where: {
        id: id,
      },
    });
  }

  async getCinemaHallByName(name) {
    return await CinemaHall.findOne({
      where: {
        name: name,
      },
    });
  }

  async createCinemaHall(cinemaHall) {
    return await CinemaHall.create(cinemaHall);
  }

  async updateCinemaHall(id, cinemaHall) {
    return await CinemaHall.update(cinemaHall, {
      where: {
        id: id,
      },
    });
  }

  async deleteCinemaHall(id) {
    return await CinemaHall.destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = new CinemaHallRepository();
