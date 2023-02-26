const CinemaHallSeat = require("../models/CinemaHallSeat");

class CinemaHallSeatRepository {
  async getAllCinemaHallSeat() {
    return await CinemaHallSeat.findAll();
  }

  async getCinemaHallSeatById(id) {
    return await CinemaHallSeat.findOne({
      where: {
        id: id,
      },
    });
  }

  async getCinemaHallSeatByCinemaHallId(id) {
    return await CinemaHallSeat.findAll({
      where: {
        idCinemaHall: id,
      },
    });
  }

  async createCinemaHallSeat(cinemaHallSeat) {
    return await CinemaHallSeat.create(cinemaHallSeat);
  }

  async updateCinemaHallSeat(id, cinemaHallSeat) {
    return await CinemaHallSeat.update(cinemaHallSeat, {
      where: {
        id: id,
      },
    });
  }

  async deleteCinemaHallSeat(id) {
    return await CinemaHallSeat.destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = new CinemaHallSeatRepository();