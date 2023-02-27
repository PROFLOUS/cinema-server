const StaffRepository = require('../repositories/staff.repository');

class StaffService {

    async getAllStaff() {
        const data = await StaffRepository.GetStaffs();
        return data;
    }

    async getStaffById(id) {
        return await StaffRepository.GetById(id);
    }

    async getStaffByRole(role) {
        return await StaffRepository.GetByRole(role);
    }

    async getStaffByEmail(email) {
        return await StaffRepository.GetByEmail(email);
    }

    async getStaffByPhone(phone) {
        return await StaffRepository.GetByPhone(phone);
    }

    async createStaff(staff) {
        staff.isActivated = false;
        staff.start_date = new Date();
        return await StaffRepository.CreateStaff(staff);
    }

    async updateStaff(id, staff) {
        return await StaffRepository.UpdateStaff(id, staff);
    }

    async deleteStaff(id) {
        return await StaffRepository.DeleteStaff(id);
    }

}

module.exports = new StaffService();