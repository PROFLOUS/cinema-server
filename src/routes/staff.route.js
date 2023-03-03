const StaffController = require('../controllers/staff.controller');
const router = require('express').Router();
const uploadFile = require('../middleware/uploadFile.middleware');

router.get('/', StaffController.getAllStaff);
router.get('/:id', StaffController.getStaffById);
router.get('/role/:role', StaffController.getStaffByRole);
router.get('/email/:email', StaffController.getStaffByEmail);
router.get('/phone/:phone', StaffController.getStaffByPhone);
router.post('/', uploadFile.uploadFileMiddleware ,StaffController.createStaff);
router.put('/:id',uploadFile.uploadFileMiddleware ,StaffController.updateStaff);
router.delete('/:id', StaffController.deleteStaff);

module.exports = router;