const CustomerRepository = require('../repositories/customer.repository');
const MemberShipRepository = require('../repositories/menberShip.repository');

class CustomerService {

    async getAllCustomer() {
        return await CustomerRepository.getAllCustomer();
    }

    async getCustomerById(id) {
        return await CustomerRepository.getCustomerById(id);
    }

    async getCustomerByCode(code) {
        return await CustomerRepository.getCustomerByCode(code);
    }

    async getCustomerByPhone(phone) {
        return await CustomerRepository.getCustomerByPhone(phone);
    }

    async getCustomerByEmail(email) {
        return await CustomerRepository.getCustomerByEmail(email);
    }

    async createCustomer(customer) {
        return await CustomerRepository.createCustomer(customer);
    }

    async updateCustomer(id, customer) {
        return await CustomerRepository.updateCustomer(id, customer);
    }

    async deleteCustomer(id) {
        return await CustomerRepository.deleteCustomer(id);
    }

    async getInfoMemberShip(id) {
        const data = await MemberShipRepository.GetInfoCustomer(id);
        
        return data;
    }

}

module.exports = new CustomerService();