const RoleService = require("../services/role.service");

class RoleController {
    
    async getAll(req, res) {
        try{
            const rs = await RoleService.getAll();
            res.status(200).json(rs);
        }
        catch(err){
            res.status(500).json({
                status: 500,
                message: err.message,
            });
        }
    }
    
    async getById(req, res) {
        try{
            const rs = await RoleService.getById(req.params.id);
            res.status(200).json(rs);
        }
        catch(err){
            res.status(500).json({
                status: 500,
                message: err.message,
            });
        }
    }
    }

module.exports = new RoleController();