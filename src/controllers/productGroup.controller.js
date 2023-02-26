const ProductGroupService = require("../services/productGroup.service");

class ProductGroupController {
  // [GET] /productGroups
  async getAllProductGroup(req, res) {
    try {
      const productGroups = await ProductGroupService.getAllProductGroup();
      res.status(200).json(productGroups);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [GET] /productGroups/:id
  async getProductGroupById(req, res) {
    try {
      const productGroup = await ProductGroupService.getProductGroupById(
        req.params.id
      );
      res.status(200).json(productGroup);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [GET] /productGroups/:code
  async getProductGroupByCode(req, res) {
    try {
      const productGroup = await ProductGroupService.getProductGroupByCode(
        req.params.code
      );
      res.status(200).json(productGroup);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [GET] /productGroups/:name
  async getProductGroupByName(req, res) {
    try {
      const productGroup = await ProductGroupService.getProductGroupByName(
        req.params.name
      );
      res.status(200).json(productGroup);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [POST] /productGroups
  async createProductGroup(req, res) {
    try {
      const productGroup = await ProductGroupService.createProductGroup(
        req.body
      );
      res.status(201).json(productGroup);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [PUT] /productGroups/:id
  async updateProductGroup(req, res) {
    try {
      const { id } = req.params;
      const productGroup = req.body;
      const updateProductGroup = await ProductGroupService.updateProductGroup(
        id,
        productGroup
      );
      res.status(200).json(updateProductGroup);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [DELETE] /productGroups/:id
  async deleteProductGroup(req, res) {
    try {
      const { id } = req.params;
      await ProductGroupService.deleteProductGroup(id);
      res.status(200).json({ message: "Delete success" });
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }
}

module.exports = new ProductGroupController();
