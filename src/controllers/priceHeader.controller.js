const PriceHeaderService = require("../services/priceHeader.service");

class PriceHeaderController {
  async getAllPriceHeader(req, res) {
    try {
      const priceHeaders = await PriceHeaderService.getAllPriceHeader();
      res.status(200).json(priceHeaders);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getPriceHeaderById(req, res) {
    try {
      const id = req.params.id;
      const priceHeader = await PriceHeaderService.getPriceHeaderById(id);
      res.status(200).json(priceHeader);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async createPriceHeader(req, res) {
    try {
      const priceHeader = req.body;
      const newPriceHeader = await PriceHeaderService.createPriceHeader(
        priceHeader
      );
      res.status(200).json(newPriceHeader);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updatePriceHeader(req, res) {
    try {
      const id = req.params.id;
      const priceHeader = req.body;
      const updatedPriceHeader = await PriceHeaderService.updatePriceHeader(
        id,
        priceHeader
      );
      res.status(200).json(updatedPriceHeader);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deletePriceHeader(req, res) {
    try {
      const id = req.params.id;
      const deletedPriceHeader = await PriceHeaderService.deletePriceHeader(id);
      res.status(200).json(deletedPriceHeader);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new PriceHeaderController();
