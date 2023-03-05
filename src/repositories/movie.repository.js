const Movie = require("../models/Movie");
const CategoryMovie = require("../models/CategoryMovie");

class MovieRepository {
  async getAllMovie() {
    return await Movie.findAll({
      order: [["id", "DESC"]],
      include: [
        {
          model: CategoryMovie,
          as: "category",
          attributes: ["id","nameCategory"],
        }
      ],
    });
  }

  async getMovieById(id) {
    return await Movie.findOne({
      where: {
        id: id,
      },
    });
  }

  async getMovieByName(name) {
    return await Movie.findOne({
      where: {
        name: name,
      },
    });
  }

  async getMovieByCinemaId(id) {
    return await Movie.findAll({
      where: {
        idCinema: id,
      },
    });
  }

  async createMovie(movie) {
    return await Movie.create(movie);
  }

  async updateMovie(id, movie) {
    return await Movie.update(movie, {
      where: {
        id: id,
      },
    });
  }

  async deleteMovie(id) {
    return await Movie.destroy({
      where: {
        id: id,
      },
    });
  }

  async getDurationByMovieId(id) {
    return await Movie.findOne({
      where: {
        id: id,
      },
      attributes: ["duration"],
    });
  }
}

module.exports = new MovieRepository();
