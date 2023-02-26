const PromotionLineService = require("../services/promotionLine.service");

class PromotionLineController {
  // [GET] /promotionLines
  async getAllPromotionLine(req, res) {
    try {
      const promotionLines = await PromotionLineService.getAllPromotionLine();
      res.status(200).json(promotionLines);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [GET] /promotionLines/:id
  async getPromotionLineById(req, res) {
    try {
      const promotionLine = await PromotionLineService.getPromotionLineById(
        req.params.id
      );
      res.status(200).json(promotionLine);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [GET] /promotionLines/promotionHeader/:id
  async getPromotionLineByPromotionHeaderId(req, res) {
    try {
      const promotionLines =
        await PromotionLineService.getPromotionLineByPromotionHeaderId(
          req.params.id
        );
      res.status(200).json(promotionLines);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [GET] /promotionLines/code/:code
  async getPromotionLineByCode(req, res) {
    try {
      const promotionLine = await PromotionLineService.getPromotionLineByCode(
        req.params.code
      );
      res.status(200).json(promotionLine);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [POST] /promotionLines
  async createPromotionLine(req, res) {
    try {
      const newPromotionLine = await PromotionLineService.createPromotionLine(
        req
      );
      res.status(201).json(newPromotionLine);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [PUT] /promotionLines/:id
  async updatePromotionLine(req, res) {
    try {
      const { id } = req.params;
      const promotionLine = req.body;
      const updatePromotionLine =
        await PromotionLineService.updatePromotionLine(id, promotionLine);
      res.status(200).json(updatePromotionLine);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [DELETE] /promotionLines/:id
  async deletePromotionLine(req, res) {
    try {
      const { id } = req.params;
      const deletePromotionLine =
        await PromotionLineService.deletePromotionLine(id);
      res.status(200).json(deletePromotionLine);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }
}

module.exports = new PromotionLineController();