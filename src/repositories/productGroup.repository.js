const itemLine = require('../models/itemComboLine');

class productGroupRepository {
    async getAllProductGroup() {
        return await itemLine.findAll();
    }

    async getProductGroupById(id) {
        return await itemLine.findOne({
            where: {
                id: id
            }
        });
    }


    async createProductGroup(productGroup) {
        return await itemLine.create(productGroup);
    }

    async updateProductGroup(id, productGroup) {
        return await itemLine.update(productGroup, {
            where: {
                id: id
            }
        });
    }

    async deleteProductGroup(id) {
        return await itemLine.destroy({
            where: {
                id: id
            }
        });
    }

}

module.exports = new productGroupRepository();