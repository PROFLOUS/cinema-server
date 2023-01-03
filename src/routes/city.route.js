const router = require('express').Router();
const CityController = require('../controllers/city.controller');

const cityRouter = () => {
    const cityController = new CityController();

    router.get('/', cityController.getAllCity);

    return router;
};

module.exports = cityRouter;
