const AddressPathService = require("../services/address_path.services");

class AddressPathController {

    //[GET] /address_path/:id
    async getAddressPathById(req, res) {
        try{
            const rs = await AddressPathService.getAddressPathById(req.params.id);
            res.status(200).json(rs);
        }catch(err){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }

    //[POST] /address_path
    async createAddressPath(req, res) {
        try{
            const rs = await AddressPathService.createAddressPath(req.body);
            res.status(201).json(rs);
        }catch(err){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }

    //[PUT] /address_path/:id
    async updateAddressPath(req, res) {
        try{
            const rs = await AddressPathService.updateAddressPath(req.params.id, req.body);
            res.status(200).json(rs);
        }catch(err){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }

    //[DELETE] /address_path/:id
    async deleteAddressPath(req, res) {
        try{
            const rs = await AddressPathService.deleteAddressPath(req.params.id);
            res.status(200).json(rs);
        }catch(err){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }

}

module.exports = new AddressPathController();