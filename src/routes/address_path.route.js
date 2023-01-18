const router = require('express').Router();

const AddressPathController = require('../controllers/address_path.controller');

router.get('/:id', AddressPathController.getAddressPathById);

router.post('/', AddressPathController.createAddressPath);

router.put('/:id', AddressPathController.updateAddressPath);

router.delete('/:id', AddressPathController.deleteAddressPath);

module.exports = router;