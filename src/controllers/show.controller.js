const ShowService = require("../services/show.service");

class ShowController {
  //[GET] /show
  async getAllShow(req, res) {
    try {
      const rs = await ShowService.getAllShow();
      res.status(200).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  //[GET] /show/:id
  async getShowById(req, res) {
    try {
      const rs = await ShowService.getShowById(req.params.id);
      res.status(200).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  //[GET] /show/movie/:movieId
  async getShowByMovieId(req, res) {
    try {
      const rs = await ShowService.getShowByMovieId(req);
      res.status(200).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  //[GET] /show/cinema/:cinemaId
  async getShowByCinemaId(req, res) {
    try {
      const rs = await ShowService.getShowByCinemaId(req);
      res.status(200).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  //[POST] /show
  async createShow(req, res) {
    try {
      const rs = await ShowService.createShow(req.body);
      res.status(200).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  //[PUT] /show/:id
  async updateShow(req, res) {
    try {
      const rs = await ShowService.updateShow(req.params.id, req.body);
      res.status(200).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  //[DELETE] /show/:id
  async deleteShow(req, res) {
    try {
      const rs = await ShowService.deleteShow(req.params.id);
      res.status(200).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  async checkIsShowTimeExist(req,res) {
    const { showTime,
      idMovie,
      idCinemaHall,
      showDate,
      idCinema } = req.body;
    try {
      const rs = await ShowService.checkIsShowTimeExist(showTime,
        idMovie,
        idCinemaHall,
        showDate,
        idCinema
        );
      res.status(200).json(rs);
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  async checkShowTimeIsPassed(req,res) {
    try {
      const rs = await ShowService.checkShowTimeIsPassed(req.params.id);
      res.status(200).json(rs);
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }
}

module.exports = new ShowController();
