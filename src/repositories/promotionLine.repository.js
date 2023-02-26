const PromotionLine = require("../models/PromotionLine");

class PromotionLineRepository {
  async getAllPromotionLine() {
    return await PromotionLine.findAll();
  }

  async getPromotionLineById(id) {
    return await PromotionLine.findOne({
      where: {
        id: id,
      },
    });
  }

  async getPromotionLineByCode(code) {
    return await PromotionLine.findOne({
      where: {
        promotionCode: code,
      },
    });
  }

  async getPromotionLineByPromotionHeaderId(id) {
    return await PromotionLine.findAll({
      where: {
        idPromotionHeader: id,
      },
    });
  }

  async createPromotionLine(promotionLine) {
    return await PromotionLine.create(promotionLine);
  }

  async updatePromotionLine(id, promotionLine) {
    return await PromotionLine.update(promotionLine, {
      where: {
        id: id,
      },
    });
  }

  async deletePromotionLine(id) {
    return await PromotionLine.destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = new PromotionLineRepository();
