const PromotionDetailService = require("../services/promotionDetail.service");

class PromotionDetailController {
  // [GET] /promotionDetails
  async getAllPromotionDetail(req, res) {
    try {
      const promotionDetails =
        await PromotionDetailService.getAllPromotionDetail();
      res.status(200).json(promotionDetails);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [GET] /promotionDetails/:id
  async getPromotionDetailById(req, res) {
    try {
      const promotionDetail =
        await PromotionDetailService.getPromotionDetailById(req.params.id);
      res.status(200).json(promotionDetail);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [GET] /promotionDetails/promotionLine/:id
  async getPromotionDetailByPromotionLineId(req, res) {
    try {
      const promotionDetails =
        await PromotionDetailService.getPromotionDetailByPromotionLineId(
          req.params.id
        );
      res.status(200).json(promotionDetails);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [POST] /promotionDetails
  async createPromotionDetail(req, res) {
    try {
      const promotionDetail =
        await PromotionDetailService.createPromotionDetail(req.body);
      res.status(200).json(promotionDetail);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [PUT] /promotionDetails/:id
  async updatePromotionDetail(req, res) {
    try {
      const promotionDetail =
        await PromotionDetailService.updatePromotionDetail(
          req.params.id,
          req.body
        );
      res.status(200).json(promotionDetail);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [DELETE] /promotionDetails/:id
  async deletePromotionDetail(req, res) {
    try {
      const promotionDetail =
        await PromotionDetailService.deletePromotionDetail(req.params.id);
      res.status(200).json(promotionDetail);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }
}

module.exports = new PromotionDetailController();
