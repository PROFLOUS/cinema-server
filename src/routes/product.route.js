const ProductController = require('../controllers/product.controller');
const router = require('express').Router();

router.get('/', ProductController.getAllProduct);
router.get('/:id', ProductController.getProductById);
router.get('/code/:code', ProductController.getProductByCode);
router.post('/', ProductController.createProduct);
router.put('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);
router.get('/price/:id', ProductController.getPriceByProduct);

module.exports = router;