const router = require('express').Router();

const AddressController = require('../controllers/address.controller');

const rateLimiter = require('../middleware/rateLimit.middleware');

const auth = require('../middleware/auth.middleware');

const {isAdmin,isSaleStaff,isLogictisStaff} = require('../middleware/decentralization');

router.get('/:id', AddressController.getAddressById);

router.post('/', AddressController.createAddress);

router.put('/:id', AddressController.updateAddress);

router.delete('/:id', AddressController.deleteAddress);

module.exports = router;
