const HierarchyAddress = require("../models/HierarchyAddress");

class AddressRepository {
  async getAddressById(id) {
    return await HierarchyAddress.findOne({
      where: {
        id: id,
      },
    });
  }

  async createAddress(address) {
    return await HierarchyAddress.create(address);
  }

  async updateAddress(id, address) {
    return await HierarchyAddress.update(address, {
      where: {
        id: id,
      },
    });
  }

  async deleteAddress(id) {
    return await HierarchyAddress.destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = new AddressRepository();
