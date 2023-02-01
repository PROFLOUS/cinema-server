const CategoryMovieService = require("../services/categoryMovie.services");

class CategoryMovieController {
  //[GET] /categoryMovie
  async getAllCategoryMovie(req, res) {
    try {
      const rs = await CategoryMovieService.getAllCategoryMovie();
      res.status(200).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  //[GET] /categoryMovie/:id
  async getCategoryMovieById(req, res) {
    try {
      const rs = await CategoryMovieService.getCategoryMovieById(req.params.id);
      res.status(200).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  //[GET] /categoryMovie/name/:name
  async getCategoryMovieByName(req, res) {
    try {
      const rs = await CategoryMovieService.getCategoryMovieByName(
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

  //[POST] /categoryMovie
  async createCategoryMovie(req, res) {
    try {
      const rs = await CategoryMovieService.createCategoryMovie(req.body);
      res.status(201).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  //[PUT] /categoryMovie/:id
  async updateCategoryMovie(req, res) {
    try {
      const rs = await CategoryMovieService.updateCategoryMovie(
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

  //[DELETE] /categoryMovie/:id
  async deleteCategoryMovie(req, res) {
    try {
      const rs = await CategoryMovieService.deleteCategoryMovie(req.params.id);
      res.status(200).json(rs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }
}

module.exports = new CategoryMovieController();