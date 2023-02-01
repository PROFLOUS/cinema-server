const Movie = require("../models/Movie");

class MovieRepository {
  async getAllMovie() {
    return await Movie.findAll();
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
}

module.exports = new MovieRepository();
