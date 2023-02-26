const PriceLine = require('../models/PriceLine');
const Product = require('../models/Product');

class PriceLineRepository {
  async getAllPriceLine() {
    const data = await PriceLine.findAll({
      include: [
        {
          model: Product,
        },
      ],
      astributes: ['id', 'price', 'idPriceHeader', 'createdAt','updatedAt'],
    });
    return data;
  }

  async getPriceLineById(id) {
    return await PriceLine.findOne({
      where: {
        id: id,
      },
    });
  }

  async getPriceLineByPriceHeaderId(id) {
    return await PriceLine.findAll({
      where: {
        idPriceHeader: id,
      },
    });
  }

  async createPriceLine(priceLine) {
    return await PriceLine.create(priceLine);
  }

  async updatePriceLine(id, priceLine) {
    return await PriceLine.update(priceLine, {
      where: {
        id: id,
      },
    });
  }

  async deletePriceLine(id) {
    return await PriceLine.destroy({
      where: {
        id: id,
      },
    });
  }

  async getPriceByProduct(idProduct){
    const data = await PriceLine.findOne({
      attributes: [ 'price'],
      where: {
        idProduct: idProduct,
      },
      
    });
    return data;
  }
}

module.exports = new PriceLineRepository();