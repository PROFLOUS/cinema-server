const CustomerController = require('../controllers/customer.controller');
const router = require('express').Router();

router.get('/', CustomerController.getAllCustomer);
router.get('/:id', CustomerController.getCustomerById);
router.get('/code/:code', CustomerController.getCustomerByCode);
router.get('/phone/:phone', CustomerController.getCustomerByPhone);
router.get('/email/:email', CustomerController.getCustomerByEmail);
router.get('/membership/:id', CustomerController.getInfoMemberShip);
router.post('/', CustomerController.createCustomer);
router.put('/:id', CustomerController.updateCustomer);
router.delete('/:id', CustomerController.deleteCustomer);

module.exports = router;
