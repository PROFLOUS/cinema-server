const CinameRepository = require("../repositories/categoryMovie.repository");

class CategoryMovieService {
  async getAllCategoryMovie() {
    return await CinameRepository.getAllCategoryMovie();
  }

  async getCategoryMovieById(id) {
    return await CinameRepository.getCategoryMovieById(id);
  }

  async getCategoryMovieByName(name) {
    return await CinameRepository.getCategoryMovieByName(name);
  }

  async createCategoryMovie(categoryMovie) {
    return await CinameRepository.createCategoryMovie(categoryMovie);
  }

  async updateCategoryMovie(id, categoryMovie) {
    await CinameRepository.updateCategoryMovie(id, categoryMovie);
    return { message: "Update success" };
  }

  async deleteCategoryMovie(id) {
    await CinameRepository.deleteCategoryMovie(id);
    return { message: "Delete success" };
  }
}

module.exports = new CategoryMovieService();
