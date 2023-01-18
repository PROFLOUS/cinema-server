const CinemaHall = require("../models/CinemaHall");

class CinemaHallRepository {
    
    async getAllCinemaHall() {
        return await CinemaHall.findAll();
    }

    async getCinemaHallById(id) {
        return await CinemaHall.findOne({
            where: {
                id: id
            }
        });
    }

    async getCinemaHallByName(name) {
        return await CinemaHall.findOne({
            where: {
                name: name
            }
        });
    }

    async createCinemaHall(cinemaHall) {
        return await models.CinemaHall.create(cinemaHall);
    }

    async updateCinemaHall(id, cinemaHall) {
        return await models.CinemaHall.update(cinemaHall, {
            where: {
                id: id
            }
        });
    }

    async deleteCinemaHall(id) {
        return await models.CinemaHall.destroy({
            where: {
                id: id
            }
        });
    }

}

module.exports = new CinemaHallRepository();