const initModels = require('../models/init-models');
const sequelize = require('../config/database');
const models = initModels(sequelize);

class CityRepository {
    async getAllCity() {
        return await models.City.findAll();
    }
}

module.exports = new CityRepository();
