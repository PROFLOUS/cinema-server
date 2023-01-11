const initModels = require('../models/init-models');
const sequelize = require('../config/database');
const models = initModels(sequelize);

class RoleRepository {

    async GetNameRoleByStaffId(id) {
        return await models.Role.findOne({
            where: {
                staff_id: id
            }
        });
    }

}

module.exports = new RoleRepository();
