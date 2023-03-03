const CustomerController = require('../controllers/customer.controller');
const router = require('express').Router();
const uploadFile = require('../middleware/uploadFile.middleware');

router.get('/', CustomerController.getAllCustomer);
router.get('/:id', CustomerController.getCustomerById);
router.get('/code/:code', CustomerController.getCustomerByCode);
router.get('/phone/:phone', CustomerController.getCustomerByPhone);
router.get('/email/:email', CustomerController.getCustomerByEmail);
router.get('/membership/:id', CustomerController.getInfoMemberShip);
router.post('/',uploadFile.uploadFileMiddleware, CustomerController.createCustomer);
router.put('/:id',uploadFile.uploadFileMiddleware, CustomerController.updateCustomer);
router.delete('/:id', CustomerController.deleteCustomer);
router.get('/all', CustomerController.getCustomers);

module.exports = router;
