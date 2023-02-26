const PriceHeaderController = require("../controllers/priceHeader.controller");
const router = require("express").Router();

router.get("/", PriceHeaderController.getAllPriceHeader);
router.get("/:id", PriceHeaderController.getPriceHeaderById);
router.post("/", PriceHeaderController.createPriceHeader);
router.put("/:id", PriceHeaderController.updatePriceHeader);
router.delete("/:id", PriceHeaderController.deletePriceHeader);

module.exports = router;