const ProductController = require('../controllers/product.controller');
const router = require('express').Router();
const uploadFile = require('../middleware/uploadFile.middleware');

router.get('/', ProductController.getAllProduct);
router.get('/:id', ProductController.getProductById);
router.get('/code/:code', ProductController.getProductByCode);
router.post('/',uploadFile.uploadFileMiddleware ,ProductController.createProduct);
router.put('/:id',uploadFile.uploadFileMiddleware, ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);
router.get('/price/:id', ProductController.getPriceByProduct);

module.exports = router;