const MemberShipController = require('../controllers/menberShip.controller');
const router = require('express').Router();

router.get('/:id', MemberShipController.getMemberShipById);
router.get('/code/:code', MemberShipController.getMemberShipByCode);
router.get('/customer/:id', MemberShipController.getMemberShipByCustomerId);
router.get('/rank/:id', MemberShipController.getMemberShipByRankId);
router.post('/', MemberShipController.createMemberShip);
router.put('/:id', MemberShipController.updateMemberShip);
router.delete('/:id', MemberShipController.deleteMemberShip);


module.exports = router;