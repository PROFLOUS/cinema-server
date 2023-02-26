const PromotionDetailController = require("../controllers/promotionDetail.controller");
const router = require("express").Router();

router.get("/", PromotionDetailController.getAllPromotionDetail);
router.get("/:id", PromotionDetailController.getPromotionDetailById);
router.get(
  "/promotionLine/:id",
  PromotionDetailController.getPromotionDetailByPromotionLineId
);
router.post("/", PromotionDetailController.createPromotionDetail);
router.put("/:id", PromotionDetailController.updatePromotionDetail);
router.delete("/:id", PromotionDetailController.deletePromotionDetail);

module.exports = router;
