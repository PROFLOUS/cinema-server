const PriceHeaderRepository = require('../repositories/priceHeader.repository');

class PriceHeaderService {
  async getAllPriceHeader() {
    return await PriceHeaderRepository.getAllPriceHeader();
  }

  async getPriceHeaderById(id) {
    return await PriceHeaderRepository.getPriceHeaderById(id);
  }

  async getPriceHeaderByProduct(idProduct) {
    return await PriceHeaderRepository.getPriceHeaderByProduct(idProduct);
  }

  async createPriceHeader(priceHeader) {
    return await PriceHeaderRepository.createPriceHeader(priceHeader);
  }

  async updatePriceHeader(id, priceHeader) {
    return await PriceHeaderRepository.updatePriceHeader(id, priceHeader);
  }

  async deletePriceHeader(id) {
    return await PriceHeaderRepository.deletePriceHeader(id);
  }
}

module.exports = new PriceHeaderService();