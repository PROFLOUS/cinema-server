const PromotionDetailRepository = require("../repositories/promotionDetail.repository");

class PromotionDetailService {
  async getAllPromotionDetail() {
    return await PromotionDetailRepository.getAllPromotionDetail();
  }

  async getPromotionDetailById(id) {
    return await PromotionDetailRepository.getPromotionDetailById(id);
  }

  async getPromotionDetailByPromotionLineId(id) {
    return await PromotionDetailRepository.getPromotionDetailByPromotionLineId(
      id
    );
  }

  async createPromotionDetail(promotionDetail) {
    return await PromotionDetailRepository.createPromotionDetail(
      promotionDetail
    );
  }

  async updatePromotionDetail(id, promotionDetail) {
    await PromotionDetailRepository.updatePromotionDetail(id, promotionDetail);
    return { message: "Update success" };
  }

  async deletePromotionDetail(id) {
    await PromotionDetailRepository.deletePromotionDetail(id);
    return { message: "Delete success" };
  }
}

module.exports = new PromotionDetailService();
