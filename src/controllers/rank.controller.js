const RankService = require("../services/rank.service");

class RankController {
    // [GET] /ranks
    async getAllRank(req, res) {
        try {
        const ranks = await RankService.getAllRank();
        res.status(200).json(ranks);
        } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        });
        }
    }
    
    // [GET] /ranks/:id
    async getRankById(req, res) {
        try {
        const rank = await RankService.getRankById(req.params.id);
        res.status(200).json(rank);
        } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        });
        }
    }
    
    // [GET] /ranks/name/:name
    async getRankByName(req, res) {
        try {
        const rank = await RankService.getRankByName(req.params.name);
        res.status(200).json(rank);
        } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        });
        }
    }
    
    // [POST] /ranks
    async createRank(req, res) {
        try {
        const newRank = await RankService.createRank(req);
        res.status(200).json(newRank);
        } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        });
        }
    }
    
    // [PUT] /ranks/:id
    async updateRank(req, res) {
        try {
        const rank = req.body;
        const id = req.params.id;
        const updatedRank = await RankService.updateRank(id, rank);
        res.status(200).json(updatedRank);
        } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        });
        }
    }
    
    // [DELETE] /ranks/:id
    async deleteRank(req, res) {
        try {
        const id = req.params.id;
        const deletedRank = await RankService.deleteRank(id);
        res.status(200).json(deletedRank);
        } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        });
        }
    }
}

module.exports = new RankController();

