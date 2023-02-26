const ProductRepository = require("../repositories/product.repository");

class ProductService {
  async getAllProduct() {
    return await ProductRepository.getAllProduct();
  }

  async getProductById(id) {
    return await ProductRepository.getProductById({
      where: {
        id: id,
      },
    });
  }

  async getProductByName(name) {
    return await ProductRepository.getProductByName({
      where: {
        nameProduct: name,
      },
    });
  }

  async getProductByCode(code) {
    return await ProductRepository.getProductByCode({
      where: {
        productCode: code,
      },
    });
  }

  async createProduct(product) {
    return await ProductRepository.createProduct(product);
  }

  async updateProduct(id, product) {
    return await ProductRepository.updateProduct(product, {
      where: {
        id: id,
      },
    });
  }

  async deleteProduct(id) {
    return await ProductRepository.deleteProduct({
      where: {
        id: id,
      },
    });
  }
}

module.exports = new ProductService();
