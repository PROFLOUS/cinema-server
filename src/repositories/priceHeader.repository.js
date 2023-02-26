const PriceHeader = require("../models/PriceHeader");

class PriceHeaderRepository {
  async getAllPriceHeader() {
    return await PriceHeader.findAll();
  }

  async getPriceHeaderById(id) {
    return await PriceHeader.findOne({
      where: {
        id: id,
      },
    });
  }

  async getPriceHeaderByName(name) {
    return await PriceHeader.findOne({
      where: {
        name: name,
      },
    });
  }

  async createPriceHeader(priceHeader) {
    return await PriceHeader.create(priceHeader);
  }

  async updatePriceHeader(id, priceHeader) {
    return await PriceHeader.update(priceHeader, {
      where: {
        id: id,
      },
    });
  }

  async deletePriceHeader(id) {
    return await PriceHeader.destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = new PriceHeaderRepository();
