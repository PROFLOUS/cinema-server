const router = require('express').Router();
const CinemaHallSeatController = require('../controllers/cinemaHallSeat.controller');
// const rateLimiter = require('../middleware/rateLimit.middleware');
const auth = require('../middleware/auth.middleware');
const {isAdmin,isSaleStaff,isLogictisStaff} = require('../middleware/decentralization');

// router.get('/',rateLimiter({secondsWindow:60,allowedHits:20}), CinemaHallSeatController.getAllCinemaHallSeat);
router.get('/', CinemaHallSeatController.getAllCinemaHallSeat);
router.get('/:id', CinemaHallSeatController.getCinemaHallSeatById);
router.get('/cinemaHall/:cinemaHallId', CinemaHallSeatController.getCinemaHallSeatByCinemaHallId);
router.post('/', CinemaHallSeatController.createCinemaHallSeat);
router.put('/:id', CinemaHallSeatController.updateCinemaHallSeat);
router.delete('/:id', CinemaHallSeatController.deleteCinemaHallSeat);

module.exports = router;