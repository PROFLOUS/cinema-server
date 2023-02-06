const MovieRepository = require("../repository/movie.repository");
const redisDb = require("../config/redis");
const s3Service = require("./awsS3.services");

class MovieService {
  async getAllMovie() {
    const movies = await redisDb.get("movies");
    if (movies) {
      console.log("Get data from redis");
      return JSON.parse(movies);
    }
    const data = await MovieRepository.getAllMovie();
    console.log("Get data from database");
    await redisDb.set("movies", JSON.stringify(data), 60);
    return data;
  }

  async getMovieById(id) {
    return await MovieRepository.getMovieById(id);
  }

  async getMovieByName(name) {
    return await MovieRepository.getMovieByName(name);
  }

  async createMovie(req) {
    const movie = req.body;
    const image = req.file;
    console.log(image);
    const result = await s3Service.uploadFile(image);
    console.log(result);
    movie.image = result
    return await MovieRepository.createMovie(movie);
  }

  async updateMovie(id, movie) {
    await MovieRepository.updateMovie(id, movie);
    return { message: "Update success" };
  }

  async deleteMovie(id) {
    await MovieRepository.deleteMovie(id);
    return { message: "Delete success" };
  }
}

module.exports = new MovieService();
