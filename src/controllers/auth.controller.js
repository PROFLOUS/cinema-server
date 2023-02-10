const authServices = require('../services/auth.service');

class AuthController {

    //[POST] /signup
    async SignUp(req, res) {
        try{
            const rs = await authServices.SignUp(req.body);
            res.status(rs.status).json(rs);
        }catch(err){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }

    //[POST] /verify-otp
    async VerifyOTP(req, res) {
        try{
            // id, otp
            const rs = await authServices.VerifyOTP(req.body);
            res.status(rs.status).json(rs);
        }catch(err){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }

    //[POST] /login
    async Login(req, res) {
        try{
            // email, password
            const rs = await authServices.Login(req.body);
            res.status(rs.status).json(rs);
        }catch(err){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }

    //[POST] /refresh-token
    async RefreshToken(req, res) {
        try{
            const rs = await authServices.RefreshToken(req.body);
            res.status(rs.status).json(rs);
        }catch(err){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }
        

}

module.exports = new AuthController();

    