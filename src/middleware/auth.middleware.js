const { ValidateSignature } = require('../utils/auth.util');

module.exports = async (req,res,next) => {
    const isAuthorized = await ValidateSignature(req);

    if(isAuthorized){
        console.log('Authorized');
        return next();
    }
    return res.status(403).json({message: 'Not Authorized'})
}