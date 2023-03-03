const CustomerRepository = require('../repositories/customer.repository');
const MemberShipRepository = require('../repositories/menberShip.repository');
const s3Service = require("./awsS3.service");

class CustomerService {

    async getAllCustomer() {
        const data = await CustomerRepository.GetAllCustomers();
        return data;
    }

    async getCustomerById(id) {
        return await CustomerRepository.GetById(id);
    }

    async getCustomerByCode(code) {
        return await CustomerRepository.getCustomerByCode(code);
    }

    async getCustomerByPhone(phone) {
        return await CustomerRepository.GetByPhone(phone);
    }

    async getCustomerByEmail(email) {
        return await CustomerRepository.GetByEmail(email);
    }

    async createCustomer(req) {
        const customer = req.body;
        const image = req.file;
        console.log(image);
        console.log('body',req.body);
        console.log('file',req.file);
        if(image){
            const result = await s3Service.uploadFile(image);
            console.log(result);
            customer.image = result
        }
        
        return await CustomerRepository.CreateCustomer(customer);
    }

    async updateCustomer(id, req) {
        const customer = req.body;
        const image = req.file;
        console.log(image);
        if (image) {
            const result = await s3Service.uploadFile(image);
            console.log(result);
            customer.image = result
        }
        return await CustomerRepository.UpdateCustomer(id, customer);
    }

    async deleteCustomer(id) {
        return await CustomerRepository.DeleteCustomer(id);
    }

    async getInfoMemberShip(id) {
        const data = await MemberShipRepository.GetInfoCustomer(id);
        
        return data;
    }

    async getCustomers(){
        const data = await MemberShipRepository.GetCustomers();
        console.log("data", data);
        return data;
    }

}

module.exports = new CustomerService();