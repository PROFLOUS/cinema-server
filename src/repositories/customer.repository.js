const Customer = require("../models/Customer");
const Rank = require("../models/Rank");



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

  async DeleteCustomer(id) {
    return await Customer.destroy({
      where: {
        id: id,
      },
    });
  }

  async GetAllCustomers() {
    return await Customer.findAll({
      include: [
        {
          model: Rank,
          attributes: ["id","nameRank"],
        }
      ],
      attributes: ["id","email","phone","firstName","lastName","gender","dob","image","city_id","district_id","ward_id","street","createdAt","updatedAt"],
    });
  }

  async GetCustomerByPage(page, limit) {
    return await Customer.findAndCountAll({
      limit: limit,
      offset: page,
    });
  }

 


}

module.exports = new CustomerRepository();
