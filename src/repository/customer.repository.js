const initModels = require('../models/init-models');
const sequelize = require('../config/database');
const models = initModels(sequelize);

class CustomerRepository {

    async CreateCustomer(customer) {
        return await models.Customer.create(customer);
    }

    async GetByEmail(email) {
        return await models.Customer.findOne({
            where: {
                email: email
            }
        });
    }

    async GetByPhone(phone) {
        return await models.Customer.findOne({
            where: {
                phone: phone
            }
        });
    }

    async GetById(id) {
        return await models.Customer.findOne({
            where: {
                id: id
            }
        });
    }

    async UpdateCustomer(id, customer) {
        return await models.Customer.update(customer, {
            where: {
                id: id
            }
        });
    }
}

module.exports = new CustomerRepository();