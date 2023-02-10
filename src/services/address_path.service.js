const AddressPathRepository = require("../repository/address_path.repository");

class AddressPathService {

    async getAddressPathById(id) {
        return await AddressPathRepository.getAddressPathById(id);
    }

    async createAddressPath(addressPath) {
        return await AddressPathRepository.createAddressPath(addressPath);
    }

    async updateAddressPath(id, addressPath) {
        await AddressPathRepository.updateAddressPath(id, addressPath);
        return { message: 'Update success' };
    }

    async deleteAddressPath(id) {
        await AddressPathRepository.deleteAddressPath(id);
        return { message: 'Delete success' };
    }

}

module.exports = new AddressPathService();