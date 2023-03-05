const CustomerService = require("../services/customer.service");

class CustomerController {
  // [GET] /customers
  async getAllCustomer(req, res) {
    try {
      const customers = await CustomerService.getAllCustomer();
      res.status(200).json(customers);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [GET] /customers/:id
  async getCustomerById(req, res) {
    try {
      const customer = await CustomerService.getCustomerById(req.params.id);
      res.status(200).json(customer);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [GET] /customers/code/:code
  async getCustomerByCode(req, res) {
    try {
      const customer = await CustomerService.getCustomerByCode(req.params.code);
      res.status(200).json(customer);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [GET] /customers/phone/:phone
  async getCustomerByPhone(req, res) {
    try {
      const customer = await CustomerService.getCustomerByPhone(
        req.params.phone
      );
      res.status(200).json(customer);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [GET] /customers/email/:email
  async getCustomerByEmail(req, res) {
    try {
      const customer = await CustomerService.getCustomerByEmail(
        req.params.email
      );
      res.status(200).json(customer);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [POST] /customers
  async createCustomer(req, res) {
    try {
      const customer = await CustomerService.createCustomer(req);
      res.status(200).json(customer);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [PUT] /customers/:id
  async updateCustomer(req, res) {
    try {
      const customer = await CustomerService.updateCustomer(
        req
      );
      res.status(200).json(customer);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [DELETE] /customers/:id
  async deleteCustomer(req, res) {
    try {
      const customer = await CustomerService.deleteCustomer(req.params.id);
      res.status(200).json(customer);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  async getInfoMemberShip(req, res) {
    try {
      const customer = await CustomerService.getInfoMemberShip(req.params.id);
      res.status(200).json(customer);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  async getCustomers(req, res) {
    try {
      console.log("getCustomers");
      const customers = await CustomerService.getCustomers();
      res.status(200).json(customers);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }
}

module.exports = new CustomerController();
