const Staff = require("../models/Staff");

class StaffRepository {
    
    async CreateStaff(staff) {
        return await Staff.create(staff);
    }

    async GetByEmail(email) {
        return await Staff.findOne({
            where: {
                email: email
            }
        });
    }

    async GetByPhone(phone) {
        return await Staff.findOne({
            where: {
                phone: phone
            }
        });
    }

    async GetById(id) {
        return await Staff.findOne({
            where: {
                id: id
            }
        });
    }

    async UpdateStaff(id, staff) {
        return await Staff.update(staff, {
            where: {
                id: id
            }
        });
    }

    async GetStaffs() {
        return await Staff.findAll();
    }

    async GetStaffsByRole(role) {
        return await Staff.findAll({
            where: {
                role: role
            }
        });
    }

    async GetRoleByStaffId(id) {
        return await Staff.findOne({
            where: {
                id: id
            }
        });
    }


    async DeleteStaff(id) {
        return await Staff.destroy({
            where: {
                id: id
            }
        });
    }
}

module.exports = new StaffRepository();

