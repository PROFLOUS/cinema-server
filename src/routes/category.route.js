const router = require('express').Router();
const CategoryMovieController = require('../controllers/categoryMovie.controller');
const rateLimiter = require('../middleware/rateLimit.middleware');
const auth = require('../middleware/auth.middleware');
const {isAdmin,isSaleStaff,isLogictisStaff} = require('../middleware/decentralization');

router.get('/', CategoryMovieController.getAllCategoryMovie);
router.get('/:id', CategoryMovieController.getCategoryMovieById);
router.get('/name/:name', CategoryMovieController.getCategoryMovieByName);
router.post('/', CategoryMovieController.createCategoryMovie);
router.put('/:id', CategoryMovieController.updateCategoryMovie);
router.delete('/:id', CategoryMovieController.deleteCategoryMovie);

module.exports = router;