const PromotionHeardRepository = require("../repositories/promotionHeader.repository");
const s3Service = require("./awsS3.service");

class PromotionHeaderService {
  async getAllPromotion() {
    return await PromotionHeardRepository.getAllPromotionHeader();
  }

  async getPromotionById(id) {
    return await PromotionHeardRepository.getPromotionHeaderById(id);
  }

  async createPromotion(req) {
    const promotion = req.body;
    const image = req.file;
    console.log(image);
    const result = await s3Service.uploadFile(image);
    console.log(result);
    promotion.image = result;
    const newPromotion = await PromotionHeardRepository.createPromotionHeader(promotion);
    return newPromotion;
  }

  async updatePromotion(id, promotion) {
    await PromotionHeardRepository.updatePromotionHeader(id, promotion);
    return { message: "Update success" };
  }

  async deletePromotion(id) {
    await PromotionHeardRepository.deletePromotionHeader(id);
    return { message: "Delete success" };
  }
}

module.exports = new PromotionHeaderService();
