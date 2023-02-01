const MovieService = require("../services/movie.services");

class MovieController {
  //[GET] /movie
  async getAllMovie(req, res) {
    try {
      const rs = await MovieService.getAllMovie();
      res.status(200).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  //[GET] /movie/:id
  async getMovieById(req, res) {
    try {
      const rs = await MovieService.getMovieById(req.params.id);
      res.status(200).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  //[GET] /movie/name/:name
  async getMovieByName(req, res) {
    try {
      const rs = await MovieService.getMovieByName(req.params.name);
      res.status(200).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  //[POST] /movie
  async createMovie(req, res) {
    try {
      const rs = await MovieService.createMovie(req.body);
      res.status(201).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  //[PUT] /movie/:id
  async updateMovie(req, res) {
    try {
      const rs = await MovieService.updateMovie(req.params.id, req.body);
      res.status(200).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  //[DELETE] /movie/:id
  async deleteMovie(req, res) {
    try {
      const rs = await MovieService.deleteMovie(req.params.id);
      res.status(200).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }
}

module.exports = new MovieController();