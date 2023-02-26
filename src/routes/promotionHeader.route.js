const PromotionController = require('../controllers/promotionHeader.controller');
const router = require('express').Router();
const uploadFile = require('../middleware/uploadFile.middleware');

router.get('/', PromotionController.getAllPromotionHeader);
router.get('/:id', PromotionController.getPromotionHeaderById);
router.post('/',uploadFile.uploadFileMiddleware, PromotionController.createPromotionHeader);
router.put('/:id', PromotionController.updatePromotionHeader);
router.delete('/:id', PromotionController.deletePromotionHeader);

module.exports = router;
