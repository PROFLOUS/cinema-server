const StaffController = require('../controllers/staff.controller');
const router = require('express').Router();

router.get('/', StaffController.getAllStaff);
router.get('/:id', StaffController.getStaffById);
router.get('/role/:role', StaffController.getStaffByRole);
router.get('/email/:email', StaffController.getStaffByEmail);
router.get('/phone/:phone', StaffController.getStaffByPhone);
router.post('/', StaffController.createStaff);
router.put('/:id', StaffController.updateStaff);
router.delete('/:id', StaffController.deleteStaff);

module.exports = router;