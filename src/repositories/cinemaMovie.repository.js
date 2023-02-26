const CinemaMovie = require("../models/CinemaMovie");
const Movie = require("../models/Movie");
const Cinema = require("../models/Cinema");

class CinemaMovieRepository {
  //[GET] /cinemaMovie
  async getAllCinemaMovie() {
    const rs = await CinemaMovie.findAll();
    return rs;
  }

  //[GET] /cinemaMovie/:id
  async getCinemaMovieById(id) {
    const rs = await CinemaMovie.findByPk(id);
    return rs;
  }

  //[GET] /cinemaMovie/cinema/:id
  async getCinemaMovieByCinemaId(id) {
    const rs = await CinemaMovie.findAll({
      where: {
        idCinema: id,
      },
      include: [
        {
          model: Movie,
        }
      ],
      

    });
    return rs;
  }

  //[GET] /cinemaMovie/movie/:id
  async getCinemaMovieByMovieId(id) {
    const rs = await CinemaMovie.findAll({
      where: {
        idMovie: id,
      },
    });
    return rs;
  }

  //[POST] /cinemaMovie
  async createCinemaMovie(data) {
    const rs = await CinemaMovie.create(data);
    return rs;
  }

  //[PUT] /cinemaMovie/:id
  async updateCinemaMovie(id, data) {
    const rs = await CinemaMovie.update(data, {
      where: {
        id: id,
      },
    });
    return rs;
  }

  //[DELETE] /cinemaMovie/:id
  async deleteCinemaMovie(id) {
    const rs = await CinemaMovie.destroy({
      where: {
        id: id,
      },
    });
    return rs;
  }
}

module.exports = new CinemaMovieRepository();