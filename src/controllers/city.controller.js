const CityService = require('../services/city.services');

class CityController {
    
    async getAllCity(req, res) {
        try{
            const cities = await CityService.getAllCity();
            res.status(201).json(cities);
        }catch(err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = CityController;