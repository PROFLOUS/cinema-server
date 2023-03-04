const ProductGroup = require('../models/ComboItem');

class productGroupRepository {
    async getAllProductGroup() {
        return await ProductGroup.findAll();
    }

    async getProductGroupById(id) {
        return await ProductGroup.findOne({
            where: {
                id: id
            }
        });
    }

    async getProductGroupByName(name) {
        return await ProductGroup.findOne({
            where: {
                nameProductGroup: name
            }
        });
    }

    async getProductGroupByCode(code) {
        return await ProductGroup.findOne({
            where: {
                productGroupCode: code
            }
        });
    }

    async createProductGroup(productGroup) {
        return await ProductGroup.create(productGroup);
    }

    async updateProductGroup(id, productGroup) {
        return await ProductGroup.update(productGroup, {
            where: {
                id: id
            }
        });
    }

    async deleteProductGroup(id) {
        return await ProductGroup.destroy({
            where: {
                id: id
            }
        });
    }

}

module.exports = new productGroupRepository();