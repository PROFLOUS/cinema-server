const CinemaMovieService = require("../services/cinemaMovie.service");

class CinemaMovieController {
  //[GET] /cinemaMovie
  async getAllCinemaMovie(req, res) {
    try {
      const rs = await CinemaMovieService.getAllCinemaMovie();
      res.status(200).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  //[GET] /cinemaMovie/:id
  async getCinemaMovieById(req, res) {
    try {
      const rs = await CinemaMovieService.getCinemaMovieById(req.params.id);
      res.status(200).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  //[GET] /cinemaMovie/cinema/:cinemaId
  async getCinemaMovieByCinemaId(req, res) {
    try {
      const rs = await CinemaMovieService.getCinemaMovieByCinemaId(
        req.params.cinemaId
      );
      res.status(200).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  //[GET] /cinemaMovie/movie/:movieId
  async getCinemaMovieByMovieId(req, res) {
    try {
      const rs = await CinemaMovieService.getCinemaMovieByMovieId(
        req.params.movieId
      );
      res.status(200).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  //[POST] /cinemaMovie
  async createCinemaMovie(req, res) {
    try {
      const rs = await CinemaMovieService.createCinemaMovie(req.body);
      res.status(201).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  //[PUT] /cinemaMovie/:id
  async updateCinemaMovie(req, res) {
    try {
      const rs = await CinemaMovieService.updateCinemaMovie(
        req.params.id,
        req.body
      );
      res.status(200).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

    //[DELETE] /cinemaMovie/:id
    async deleteCinemaMovie(req, res) {
        try{
            const rs = await CinemaMovieService.deleteCinemaMovie(req.params.id);
            res.status(200).json(rs);
        }catch(err){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }
}

module.exports = new CinemaMovieController();
