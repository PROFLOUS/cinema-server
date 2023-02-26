const CinemaMovieRepository = require("../repositories/cinemaMovie.repository");
const redisDb = require("../config/redis");

class CinemaMovieService {
  async getAllCinemaMovie() {
    const cinemaMovies = await redisDb.get("cinemaMovies");
    if (cinemaMovies) {
      console.log("Get data from redis");
      return JSON.parse(cinemaMovies);
    }
    const data = await CinemaMovieRepository.getAllCinemaMovie();
    console.log("Get data from database");
    await redisDb.set("cinemaMovies", JSON.stringify(data), 60);
    return data;
  }

  async getCinemaMovieById(id) {
    return await CinemaMovieRepository.getCinemaMovieById(id);
  }

  async getCinemaMovieByCinemaId(id) {
    const cinemaMovies = await redisDb.get("cinemaMoviesByCinemaId"+id);
    if (cinemaMovies) {
        console.log("Get data from redis");
        return JSON.parse(cinemaMovies);
    }
    const data = await CinemaMovieRepository.getCinemaMovieByCinemaId(id);
    console.log("Get data from database");
    const { Cinema,Movie } = data;

    let rs=[];
    data.forEach(element => {
      rs.push(element.Movie.dataValues);
    });

    await redisDb.set("cinemaMoviesByCinemaId"+id, JSON.stringify(rs), 60);
    return rs;
  }

  async getCinemaMovieByMovieId(id) {
    return await CinemaMovieRepository.getCinemaMovieByMovieId(id);
  }

  async createCinemaMovie(data) {
    return await CinemaMovieRepository.createCinemaMovie(data);
  }

  async updateCinemaMovie(id, data) {
    await CinemaMovieRepository.updateCinemaMovie(id, data);
    return { message: "Update success" };
  }

  async deleteCinemaMovie(id) {
    await CinemaMovieRepository.deleteCinemaMovie(id);
    return { message: "Delete success" };
  }
}

module.exports = new CinemaMovieService();