const Customer = require("../models/Customer");

class CustomerRepository {
  async CreateCustomer(customer) {
    return await Customer.create(customer);
  }

  async GetByEmail(email) {
    return await Customer.findOne({
      where: {
        email: email,
      },
    });
  }

  async GetByPhone(phone) {
    return await Customer.findOne({
      where: {
        phone: phone,
      },
    });
  }

  async GetById(id) {
    return await Customer.findOne({
      where: {
        id: id,
      },
    });
  }

  async UpdateCustomer(id, customer) {
    return await Customer.update(customer, {
      where: {
        id: id,
      },
    });
  }
}

module.exports = new CustomerRepository();
