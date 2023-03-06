const ProductRepository = require("../repositories/product.repository");
const s3Service = require("./awsS3.service");

class ProductService {
  async getAllProduct() {
    return await ProductRepository.getAllProduct();
  }

  async getProductById(id) {
    return await ProductRepository.getProductById(id);
  }

  async getProductByName(name) {
    return await ProductRepository.getProductByName(name);
  }

  async getProductByCode(code) {
    return await ProductRepository.getProductByCode(code);
  }

  async createProduct(req) {
    const product = req.body;
    const image = req.file;
    console.log(image);
    if (image) {
      const result = await s3Service.uploadFile(image);
      console.log(result);
      product.image = result;
    }
    return await ProductRepository.createProduct(product);
  }

  async updateProduct(id, req) {
    const product = req.body;
    const image = req.file;
    console.log(image);
    if (image) {
      const result = await s3Service.uploadFile(image);
      console.log(result);
      product.image = result;
    }
    return await ProductRepository.updateProduct(id, product);
  }

  async deleteProduct(id) {
    return await ProductRepository.deleteProduct(id);
  }
}

module.exports = new ProductService();
