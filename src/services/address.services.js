const AddressRepository = require('../repository/address.repository');

class AddressService {

    async getAddressById(id) {
        return await AddressRepository.getAddressById(id);
    }

    async createAddress(address) {
        return await AddressRepository.createAddress(address);
    }

    async updateAddress(id, address) {
        await AddressRepository.updateAddress(id, address);
        return { message: 'Update success' };
    }

    async deleteAddress(id) {
        await AddressRepository.deleteAddress(id);
        return { message: 'Delete success' };
    }

}

module.exports = new AddressService();