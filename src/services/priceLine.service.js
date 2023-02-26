const PriceLineRepository = require('../repositories/priceLine.repository');

class PriceLineService {
  async getAllPriceLine() {
    return await PriceLineRepository.getAllPriceLine();
  }

  async getPriceLineById(id) {
    return await PriceLineRepository.getPriceLineById(id);
  }

  async getPriceLineByPriceHeaderId(id) {
    return await PriceLineRepository.getPriceLineByPriceHeaderId(id);
  }

  async createPriceLine(priceLine) {
    return await PriceLineRepository.createPriceLine(priceLine);
  }

  async updatePriceLine(id, priceLine) {
    return await PriceLineRepository.updatePriceLine(id, priceLine);
  }

  async deletePriceLine(id) {
    return await PriceLineRepository.deletePriceLine(id);
  }

  async getPriceByProduct(idProduct){
    return await PriceLineRepository.getPriceByProduct(idProduct);
  }
}

module.exports = new PriceLineService();