const CityRepository = require('../repository/city.repository');

class CityService {

    async getAllCity() {
        return await CityRepository.getAllCity();
    }
}

module.exports = new CityService();