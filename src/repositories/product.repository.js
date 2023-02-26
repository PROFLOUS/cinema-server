const Product = require('../models/Product');

class ProductRepository {
    async getAllProduct() {
        return await Product.findAll();
    }

    async getProductById(id) {
        return await Product.findOne({
            where: {
                id: id
            }
        });
    }

    async getProductByName(name) {
        return await Product.findOne({
            where: {
                nameProduct: name
            }
        });
    }

    async getProductByCode(code) {
        return await Product.findOne({
            where: {
                productCode: code
            }
        });
    }

    async createProduct(product) {
        return await Product.create(product);
    }

    async updateProduct(id, product) {
        return await Product.update(product, {
            where: {
                id: id
            }
        });
    }

    async deleteProduct(id) {
        return await Product.destroy({
            where: {
                id: id
            }
        });
    }

}

module.exports = new ProductRepository();