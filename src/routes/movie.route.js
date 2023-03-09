const router = require('express').Router();
const MovieController = require('../controllers/movie.controller');
// const rateLimiter = require('../middleware/rateLimit.middleware');
const auth = require('../middleware/auth.middleware');
const {isAdmin,isSaleStaff,isLogictisStaff} = require('../middleware/decentralization');
const uploadFile = require('../middleware/uploadFile.middleware');

// router.get('/',rateLimiter({secondsWindow:60,allowedHits:20}), MovieController.getAllMovie);
router.get('/', MovieController.getAllMovie);
router.get('/:id', MovieController.getMovieById);
router.get('/name/:name', MovieController.searchMovieByName);
router.post('/',uploadFile.uploadFileMiddleware, MovieController.createMovie);
router.patch('/:id', MovieController.updateMovie);
router.delete('/:id', MovieController.deleteMovie);
router.get('/cinema/:id', MovieController.getMovieByCinemaId);

module.exports = router;