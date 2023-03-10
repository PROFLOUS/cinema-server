const Role = require("../models/Role");

class RoleRepository {

    async GetNameRoleByStaffId(id) {
        return await Role.findOne({
            where: {
                staff_id: id
            }
        });
    }

    async getAll() {
        return await Role.findAll();
    }

    async getById(id) {
        return await Role.findOne({
            where: {
                id: id
            }
        });
    }

}

module.exports = new RoleRepository();
