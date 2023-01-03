const initModels = require('../models/init-models');
const sequelize = require('../config/database');
const models = initModels(sequelize);

class CinemaHallRepository {
    
    async getAllCinemaHall() {
        return await models.CinemaHall.findAll();
    }

    async getCinemaHallById(id) {
        return await models.CinemaHall.findOne({
            where: {
                id: id
            }
        });
    }

    async getCinemaHallByName(name) {
        return await models.CinemaHall.findOne({
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