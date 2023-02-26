const PromotionLineRepository = require("../repositories/promotionLine.repository");
const s3Service = require("./awsS3.service");

class PromotionLineService {
  async getAllPromotionLine() {
    return await PromotionLineRepository.getAllPromotionLine();
  }

  async getPromotionLineById(id) {
    return await PromotionLineRepository.getPromotionLineById(id);
  }

  async getPromotionLineByCode(code) {
    return await PromotionLineRepository.getPromotionLineByCode(code);
  }

  async getPromotionLineByPromotionHeaderId(id) {
    return await PromotionLineRepository.getPromotionLineByPromotionHeaderId(
      id
    );
  }

  async createPromotionLine(req) {
    const promotionLine = req.body;
    const image = req.file;
    console.log(image);
    const result = await s3Service.uploadFile(image);
    console.log(result);
    promotionLine.image = result;
    const newPromotionLine = await PromotionLineRepository.createPromotionLine(
      promotionLine
    );
    return newPromotionLine;
  }

  async updatePromotionLine(id, promotionLine) {
    await PromotionLineRepository.updatePromotionLine(id, promotionLine);
    return { message: "Update success" };
  }

  async deletePromotionLine(id) {
    await PromotionLineRepository.deletePromotionLine(id);
    return { message: "Delete success" };
  }
}

module.exports = new PromotionLineService();
