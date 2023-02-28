const PromotionDetail = require("../models/PromotionDetail");
const Product = require("../models/Product");

class PromotionDetailRepository {
  async getAllPromotionDetail() {
    return await PromotionDetail.findAll({
      include: [
        {
          model: Product,as: "product_recive",
          attributes: ["id", "productName"],
          
        },
        {
          model: Product,as: "product_buy",
          attributes: ["id", "productName"],
        },
      ],
    });
  }

  async getPromotionDetailById(id) {
    return await PromotionDetail.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: Product,as: "product_recive",
          attributes: ["id", "productName"],
          
        },
        {
          model: Product,as: "product_buy",
          attributes: ["id", "productName"],
        },
      ],
    });
  }

  async getPromotionDetailByPromotionLineId(id) {
    return await PromotionDetail.findOne({
      where: {
        idPromotionLine: id,
      },
      include: [
        {
          model: Product,as: "product_recive",
          attributes: ["id", "productName"],
          
        },
        {
          model: Product,as: "product_buy",
          attributes: ["id", "productName"],
        },
      ],
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
