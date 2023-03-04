const MovieRepository = require("../repositories/movie.repository");
const redisDb = require("../config/redis");
const s3Service = require("./awsS3.service");
const MovieCinemaService = require("./cinemaMovie.service");

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

  async getMovieByCinemaId(id) {
    const movies = await redisDb.get("moviesByCinemaId");
    if (movies) {
      console.log("Get data from redis");
      return JSON.parse(movies);
    }
    const data = await MovieRepository.getMovieByCinemaId(id);
    console.log("Get data from database");
    await redisDb.set("moviesByCinemaId", JSON.stringify(data), 60);
    return data;
  }

  async createMovie(req) {
    const movie = req.body;
    const image = req.file;
    if(image) {
      const result = await s3Service.uploadFile(image);
      movie.image = result
    }
    const newMovie = await MovieRepository.createMovie(movie);
    const { id } = newMovie;
    const idCinema = movie.idCinema;
    await MovieCinemaService.createCinemaMovie({ idCinema, idMovie: id });
    const isExistCacheMovies = await redisDb.exists("movies");
    if (isExistCacheMovies) {
      await redisDb.del("movies");
    }
    const isExist = await redisDb.exists("cinemaMoviesByCinemaId"+id);
    if(isExist){
      await redisDb.del("cinemaMoviesByCinemaId"+id);
    }
    return newMovie;
  }

  async updateMovie(id, movie) {
    await MovieRepository.updateMovie(id, movie);
    const isExistCacheMovies = await redisDb.exists("movies");
    if (isExistCacheMovies) {
      await redisDb.del("movies");
    }
    return { message: "Update success" };
  }

  async deleteMovie(id) {
    await MovieRepository.deleteMovie(id);
    const isExistCacheMovies = await redisDb.exists("movies");
    if (isExistCacheMovies) {
      await redisDb.del("movies");
    }
    return { message: "Delete success" };
  }
}

module.exports = new MovieService();
