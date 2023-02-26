const RankController = require('../controllers/rank.controller');
const router = require('express').Router();
const uploadFile = require('../middleware/uploadFile.middleware');

router.get('/', RankController.getAllRank);
router.get('/:id', RankController.getRankById);
router.get('/name/:name', RankController.getRankByName);
router.post('/', uploadFile.uploadFileMiddleware, RankController.createRank);
router.put('/:id', RankController.updateRank);
router.delete('/:id', RankController.deleteRank);

module.exports = router;