const AddressPath = require("../models/AddressPath");

class AddressPathRepository {
    async getAddressPathById(id) {
        return await AddressPath.findOne({
            where: {
                id: id,
            },
        });
    }

    async createAddressPath(addressPath) {
        return await AddressPath.create(addressPath);
    }

    async updateAddressPath(id, addressPath) {
        return await AddressPath.update(addressPath, {
            where: {
                id: id,
            },
        });
    }

    async deleteAddressPath(id) {
        return await AddressPath.destroy({
            where: {
                id: id,
            },
        });
    }

}

module.exports = new AddressPathRepository();