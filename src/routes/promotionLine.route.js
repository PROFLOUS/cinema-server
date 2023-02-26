const PromotionLineController = require("../controllers/promotionLine.controller");
const router = require("express").Router();
const uploadFile = require('../middleware/uploadFile.middleware');

router.get("/", PromotionLineController.getAllPromotionLine);
router.get("/:id", PromotionLineController.getPromotionLineById);
router.get(
  "/promotionHeader/:id",
  PromotionLineController.getPromotionLineByPromotionHeaderId
);
router.get("/code/:code", PromotionLineController.getPromotionLineByCode);
router.post("/",uploadFile.uploadFileMiddleware, PromotionLineController.createPromotionLine);
router.put("/:id", PromotionLineController.updatePromotionLine);
router.delete("/:id", PromotionLineController.deletePromotionLine);

module.exports = router;
