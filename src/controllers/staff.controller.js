const StaffService = require("../services/staff.service");

class StaffController {
  // [GET] /staffs
  async getAllStaff(req, res) {
    try {
      const staffs = await StaffService.getAllStaff();
      res.status(200).json(staffs);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [GET] /staffs/:id
  async getStaffById(req, res) {
    try {
      const staff = await StaffService.getStaffById(req.params.id);
      res.status(200).json(staff);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [GET] /staffs/role/:role
  async getStaffByRole(req, res) {
    try {
      const staff = await StaffService.getStaffByRole(req.params.role);
      res.status(200).json(staff);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [GET] /staffs/email/:email
  async getStaffByEmail(req, res) {
    try {
      const staff = await StaffService.getStaffByEmail(req.params.email);
      res.status(200).json(staff);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [GET] /staffs/phone/:phone
  async getStaffByPhone(req, res) {
    try {
      const staff = await StaffService.getStaffByPhone(req.params.phone);
      res.status(200).json(staff);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [POST] /staffs
  async createStaff(req, res) {
    try {
      const staff = await StaffService.createStaff(req);
      res.status(200).json(staff);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [PUT] /staffs/:id
  async updateStaff(req, res) {
    try {
      const staff = await StaffService.updateStaff(req.params.id, req);
      res.status(200).json(staff);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [DELETE] /staffs/:id
  async deleteStaff(req, res) {
    try {
      const staff = await StaffService.deleteStaff(req.params.id);
      res.status(200).json(staff);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }
}

module.exports = new StaffController();