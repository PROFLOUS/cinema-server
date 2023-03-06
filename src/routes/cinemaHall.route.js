const router = require('express').Router();
const CinemaHallController = require('../controllers/cinemaHall.controller');

router.get('/', CinemaHallController.getAllCinemaHall);
router.get('/:id', CinemaHallController.getCinemaHallById);
router.get('/name/:name', CinemaHallController.getCinemaHallByName);
router.get('/cinema/:cinemaId', CinemaHallController.getCinemaHallByCinemaId);
router.post('/', CinemaHallController.createCinemaHall);
router.put('/:id', CinemaHallController.updateCinemaHall);
router.delete('/:id', CinemaHallController.deleteCinemaHall);

module.exports = router;