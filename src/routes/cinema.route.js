const router = require('express').Router();
const CinemaController = require('../controllers/cinema.controller');
const rateLimiter = require('../middleware/rateLimit.middleware');
const auth = require('../middleware/auth.middleware');
const {isAdmin,isSaleStaff,isLogictisStaff} = require('../middleware/decentralization');

router.get('/',auth,isAdmin,rateLimiter({secondsWindow:60,allowedHits:20}), CinemaController.getAllCinema);
router.get('/:id', CinemaController.getCinemaById);
router.get('/name/:name', CinemaController.getCinemaByName);
router.post('/', CinemaController.createCinema);
router.put('/:id', CinemaController.updateCinema);
router.delete('/:id', CinemaController.deleteCinema);

module.exports = router;