const PromotionDetail = require("../models/PromotionDetail");

class PromotionDetailRepository {
  async getAllPromotionDetail() {
    return await PromotionDetail.findAll();
  }

  async getPromotionDetailById(id) {
    return await PromotionDetail.findOne({
      where: {
        id: id,
      },
    });
  }

  async getPromotionDetailByPromotionLineId(id) {
    return await PromotionDetail.findAll({
      where: {
        idPromotionLine: id,
      },
    });
  }

  async createPromotionDetail(promotionDetail) {
    return await PromotionDetail.create(promotionDetail);
  }

  async updatePromotionDetail(id, promotionDetail) {
    return await PromotionDetail.update(promotionDetail, {
      where: {
        id: id,
      },
    });
  }

  async deletePromotionDetail(id) {
    return await PromotionDetail.destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = new PromotionDetailRepository();
