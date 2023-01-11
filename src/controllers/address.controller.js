const AddressService = require('../services/address.services');

class AddressController {

    //[GET] /address/:id
    async getAddressById(req, res) {
        try{
            const rs = await AddressService.getAddressById(req.params.id);
            res.status(200).json(rs);
        }catch(err){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }

    //[POST] /address
    async createAddress(req, res) {
        try{
            const rs = await AddressService.createAddress(req.body);
            res.status(201).json(rs);
        }catch(err){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }

    //[PUT] /address/:id
    async updateAddress(req, res) {
        try{
            const rs = await AddressService.updateAddress(req.params.id, req.body);
            res.status(200).json(rs);
        }catch(err){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }

    //[DELETE] /address/:id
    async deleteAddress(req, res) {
        try{
            const rs = await AddressService.deleteAddress(req.params.id);
            res.status(200).json(rs);
        }catch(err){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }

}

module.exports = new AddressController();