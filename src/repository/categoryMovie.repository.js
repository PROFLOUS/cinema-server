const CategoryMovie = require("../models/CategoryMovie");

class CategoryMovieRepository {
    async getAllCategoryMovie() {
        return await CategoryMovie.findAll();
    }
    
    async getCategoryMovieById(id) {
        return await CategoryMovie.findOne({
        where: {
            id: id,
        },
        });
    }
    
    async getCategoryMovieByName(name) {
        return await CategoryMovie.findOne({
        where: {
            name: name,
        },
        });
    }
    
    async createCategoryMovie(categoryMovie) {
        return await CategoryMovie.create(categoryMovie);
    }
    
    async updateCategoryMovie(id, categoryMovie) {
        return await CategoryMovie.update(categoryMovie, {
        where: {
            id: id,
        },
        });
    }
    
    async deleteCategoryMovie(id) {
        return await CategoryMovie.destroy({
        where: {
            id: id,
        },
        });
    }
    }

module.exports = new CategoryMovieRepository();