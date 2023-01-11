const initModels = require('../models/init-models');
const sequelize = require('../config/database');
const models = initModels(sequelize);

class AddressRepository{
    async getAddressById(id){
        return await models.HierarchyAddress.findOne({
            where:{
                id: id
            }
        });
    }

    async createAddress(address){
        return await models.HierarchyAddress.create(address);
    }

    async updateAddress(id, address){
        return await models.HierarchyAddress.update(address, {
            where:{
                id: id
            }
        });
    }

    async deleteAddress(id){
        return await models.HierarchyAddress.destroy({
            where:{
                id: id
            }
        });
    }

}

module.exports = new AddressRepository();