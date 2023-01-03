const router = require('express').Router();
const CinemaController = require('../controllers/cinema.controller');

router.get('/', CinemaController.getAllCinema);
router.get('/:id', CinemaController.getCinemaById);
router.get('/name/:name', CinemaController.getCinemaByName);
router.post('/', CinemaController.createCinema);
router.put('/:id', CinemaController.updateCinema);
router.delete('/:id', CinemaController.deleteCinema);

module.exports = router;