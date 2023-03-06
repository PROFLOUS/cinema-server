const CinemaHall = require("../models/CinemaHall");
const Cinema = require("../models/Cinema");

class CinemaHallRepository {
  async getAllCinemaHall() {
    const data = await CinemaHall.findAll({
      include: [
        {
          model: Cinema,
          attributes: ["id", "name"],
        },
      ],
    });
    return data;
  }

  async getCinemaHallById(id) {
    return await CinemaHall.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: Cinema,
          attributes: ["id", "name"],
        },
      ],
    });
  }

  async getCinemaHallByName(name) {
    return await CinemaHall.findOne({
      where: {
        name: name,
      },
      include: [
        {
          model: Cinema,
          attributes: ["id", "name"],
        },
      ],
    });
  }

  async getCinemaHallByCinemaId(cinemaId) {
    return await CinemaHall.findAll({
      where: {
        cinema_id: cinemaId,
      },
      include: [
        {
          model: Cinema,
          attributes: ["id", "name"],
        },
      ],
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
