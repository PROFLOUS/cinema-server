const Role = require("../models/Role");

class RoleRepository {

    async GetNameRoleByStaffId(id) {
        return await Role.findOne({
            where: {
                staff_id: id
            }
        });
    }

}

module.exports = new RoleRepository();
