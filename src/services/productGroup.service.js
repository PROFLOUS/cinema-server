const ProductGroupRepository = require('../repositories/productGroup.repository');

class ProductGroupService {
    async getAllProductGroup() {
        return await ProductGroupRepository.getAllProductGroup();
    }

    async getProductGroupById(id) {
        return await ProductGroupRepository.getProductGroupById(id);
    }

    async getProductGroupByName(name) {
        return await ProductGroupRepository.getProductGroupByName(name);
    }

    async getProductGroupByCode(code) {
        return await ProductGroupRepository.getProductGroupByCode(code);
    }

    async createProductGroup(productGroup) {
        return await ProductGroupRepository.createProductGroup(productGroup);
    }

    async updateProductGroup(id, productGroup) {
        await ProductGroupRepository.updateProductGroup(id, productGroup);
        return { message: "Update success" };
    }

    async deleteProductGroup(id) {
        await ProductGroupRepository.deleteProductGroup(id);
        return { message: "Delete success" };
    }
}

module.exports = new ProductGroupService();