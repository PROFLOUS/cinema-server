const PriceLineService = require('../services/priceLine.service');

class PriceLineController {
  async getAllPriceLine(req, res) {
    try {
      const priceLines = await PriceLineService.getAllPriceLine();
      res.status(200).json(priceLines);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getPriceLineById(req, res) {
    try {
      const id = req.params.id;
      const priceLine = await PriceLineService.getPriceLineById(id);
      res.status(200).json(priceLine);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getPriceLineByPriceHeaderId(req, res) {
    try {
      const id = req.params.id;
      const priceLines = await PriceLineService.getPriceLineByPriceHeaderId(id);
      res.status(200).json(priceLines);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async createPriceLine(req, res) {
    try {
      const priceLine = req.body;
      const newPriceLine = await PriceLineService.createPriceLine(priceLine);
      res.status(200).json(newPriceLine);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updatePriceLine(req, res) {
    try {
      const id = req.params.id;
      const priceLine = req.body;
      const updatedPriceLine = await PriceLineService.updatePriceLine(id, priceLine);
      res.status(200).json(updatedPriceLine);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deletePriceLine(req, res) {
    try {
      const id = req.params.id;
      const deletedPriceLine = await PriceLineService.deletePriceLine(id);
      res.status(200).json(deletedPriceLine);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  
}

module.exports = new PriceLineController();