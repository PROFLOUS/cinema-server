const Cinema = require("../models/Cinema");

class CinameRepository {
    async getAllCinema() {
        return await Cinema.findAll();
    }

    async getCinemaById(id) {
        return await Cinema.findOne({
            where: {
                id: id
            }
        });
    }

    async getCinemaByName(name) {
        return await Cinema.findOne({
            where: {
                name: name
            }
        });
    }

    async createCinema(cinema) {
        return await models.Cinema.create(cinema);
    }

    async updateCinema(id, cinema) {
        return await models.Cinema.update(cinema, {
            where: {
                id: id
            }
        });
    }

    async deleteCinema(id) {
        return await models.Cinema.destroy({
            where: {
                id: id
            }
        });
    }


    
}

module.exports = new CinameRepository();

