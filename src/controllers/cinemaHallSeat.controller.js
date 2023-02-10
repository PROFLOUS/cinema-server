const CinemaHallSeatService = require("../services/cinemaHallSeat.service");


class CinemaHallSeatController {
  //[GET] /cinemaHallSeat
  async getAllCinemaHallSeat(req, res) {
    try {
      const rs = await CinemaHallSeatService.getAllCinemaHallSeat();
      res.status(200).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  //[GET] /cinemaHallSeat/:id
  async getCinemaHallSeatById(req, res) {
    try {
      const rs = await CinemaHallSeatService.getCinemaHallSeatById(
        req.params.id
      );
      res.status(200).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  //[GET] /cinemaHallSeat/name/:name
  async getCinemaHallSeatByName(req, res) {
    try {
      const rs = await CinemaHallSeatService.getCinemaHallSeatByName(
        req.params.name
      );
      res.status(200).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  //[GET] /cinemaHallSeat/cinemaHall/:cinemaHallId
  async getCinemaHallSeatByCinemaHallId(req, res) {
    try {
      const rs = await CinemaHallSeatService.getCinemaHallSeatByCinemaHallId(
        req.params.cinemaHallId
      );
      res.status(200).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  //[POST] /cinemaHallSeat
  async createCinemaHallSeat(req, res) {
    try {
      const rs = await CinemaHallSeatService.createCinemaHallSeat(req.body);
      res.status(201).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  //[PUT] /cinemaHallSeat/:id
  async updateCinemaHallSeat(req, res) {
    try {
      const rs = await CinemaHallSeatService.updateCinemaHallSeat(
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

  //[DELETE] /cinemaHallSeat/:id
  async deleteCinemaHallSeat(req, res) {
    try {
      const rs = await CinemaHallSeatService.deleteCinemaHallSeat(
        req.params.id
      );
      res.status(200).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }
}

module.exports = new CinemaHallSeatController();
