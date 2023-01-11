const initModels = require('../models/init-models');
const sequelize = require('../config/database');
const models = initModels(sequelize);

class StaffRepository {
    
    async CreateStaff(staff) {
        return await models.Staff.create(staff);
    }

    async GetByEmail(email) {
        return await models.Staff.findOne({
            where: {
                email: email
            }
        });
    }

    async GetByPhone(phone) {
        return await models.Staff.findOne({
            where: {
                phone: phone
            }
        });
    }

    async GetById(id) {
        return await models.Staff.findOne({
            where: {
                id: id
            }
        });
    }

    async UpdateStaff(id, staff) {
        return await models.Staff.update(staff, {
            where: {
                id: id
            }
        });
    }

    async GetStaffs() {
        return await models.Staff.findAll();
    }

    async GetStaffsByRole(role) {
        return await models.Staff.findAll({
            where: {
                role: role
            }
        });
    }

    async GetRoleByStaffId(id) {
        return await models.Staff.findOne({
            where: {
                id: id
            }
        });
    }


    async DeleteStaff(id) {
        return await models.Staff.destroy({
            where: {
                id: id
            }
        });
    }
}

module.exports = new StaffRepository();

