const initModels = require('../models/init-models');
const sequelize = require('../config/database');
const models = initModels(sequelize);

class CinameRepository {
    async getAllCinema() {
        return await models.Cinema.findAll();
    }

    async getCinemaById(id) {
        return await models.Cinema.findOne({
            where: {
                id: id
            }
        });
    }

    async getCinemaByName(name) {
        return await models.Cinema.findOne({
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

    async getCinemaByCity(city) {
        return await models.Cinema.findAll({
            where: {
                city: city
            }
        });
    }

    
}

module.exports = new CinameRepository();

