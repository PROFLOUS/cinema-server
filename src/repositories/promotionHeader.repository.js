const PromotionHeader = require("../models/PromotionHeader");

class PromotionHeaderRepository {
  async getAllPromotionHeader() {
    return await PromotionHeader.findAll();
  }

  async getPromotionHeaderById(id) {
    return await PromotionHeader.findOne({
      where: {
        id: id,
      },
    });
  }

  async getPromotionHeaderByName(name) {
    return await PromotionHeader.findOne({
      where: {
        namePromotion: name,
      },
    });
  }

  async createPromotionHeader(promotionHeader) {
    return await PromotionHeader.create(promotionHeader);
  }

  async updatePromotionHeader(id, promotionHeader) {
    return await PromotionHeader.update(promotionHeader, {
      where: {
        id: id,
      },
    });
  }

  async deletePromotionHeader(id) {
    return await PromotionHeader.destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = new PromotionHeaderRepository();
