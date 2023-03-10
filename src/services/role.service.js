const RoleRepository = require("../repositories/role.repository");

class RoleService {
  async GetNameRoleByStaffId(id) {
    return await RoleRepository.GetNameRoleByStaffId(id);
  }

  async getAll() {
    return await RoleRepository.getAll();
  }

    async getById(id) {
        return await RoleRepository.getById(id);
    }
}

module.exports = new RoleService();
