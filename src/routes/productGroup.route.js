const ProductGroupController = require('../controllers/productGroup.controller');
const router = require('express').Router();

router.get('/', ProductGroupController.getAllProductGroup);
router.get('/:id', ProductGroupController.getProductGroupById);
router.get('/code/:code', ProductGroupController.getProductGroupByCode);
router.get('/name/:name', ProductGroupController.getProductGroupByName);
router.post('/', ProductGroupController.createProductGroup);
router.put('/:id', ProductGroupController.updateProductGroup);
router.delete('/:id', ProductGroupController.deleteProductGroup);

module.exports = router;
