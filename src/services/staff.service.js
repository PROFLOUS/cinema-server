const StaffRepository = require('../repositories/staff.repository');
const s3Service = require("./awsS3.service");

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

    async createStaff(req) {
        const staff = req.body;
        staff.isActivated = false;
        staff.start_date = new Date();
        const image = req.file;
        console.log(image);
        const result = await s3Service.uploadFile(image);
        console.log(result);
        staff.image = result
        return await StaffRepository.CreateStaff(staff);
    }

    async updateStaff(id, req) {
        const staff = req.body;
        const image = req.file;
        console.log(image);
        if (image) {
            const result = await s3Service.uploadFile(image);
            console.log(result);
            staff.image = result
        }
        return await StaffRepository.UpdateStaff(id, staff);
    }

    async deleteStaff(id) {
        return await StaffRepository.DeleteStaff(id);
    }

}

module.exports = new StaffService();