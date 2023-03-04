const priceLineService = require("../services/priceLine.service");
const ProductService = require("../services/product.service");

class ProductController {
  // [GET] /products
  async getAllProduct(req, res) {
    try {
      const products = await ProductService.getAllProduct();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [GET] /products/:id
  async getProductById(req, res) {
    try {
      const product = await ProductService.getProductById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [GET] /products/:code
  async getProductByCode(req, res) {
    try {
      const product = await ProductService.getProductByCode(req.params.code);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [POST] /products
  async createProduct(req, res) {
    try {
      const product = await ProductService.createProduct(req);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [PUT] /products/:id
  async updateProduct(req, res) {
    try {
      const { id } = req.params;
      const updateProduct = await ProductService.updateProduct(id, req);
      res.status(200).json(updateProduct);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [DELETE] /products/:id
  async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      const deleteProduct = await ProductService.deleteProduct(id);
      res.status(200).json(deleteProduct);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  async getPriceByProduct(req, res) {
    try {
      const id = req.params.id;
      const price = await priceLineService.getPriceByProduct(id);
      res.status(200).json(price);
    } catch (error) {
      res.status(500).json(error);
    }
  }

}

module.exports = new ProductController();