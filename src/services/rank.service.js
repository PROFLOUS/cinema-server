const RankRepository = require("../repositories/rank.repository");
const s3Service = require("./awsS3.service");
class RankService {
    async getAllRank() {
        return await RankRepository.getAllRank();
    }

    async getRankById(id) {
        return await RankRepository.getRankById(id);
    }

    async getRankByName(name) {
        return await RankRepository.getRankByName(name);
    }

    async createRank(req) {
        const rank = req.body;
        const image = req.file;
        console.log(image);
        const result = await s3Service.uploadFile(image);
        console.log(result);
        rank.image = result;
        const newRank = await RankRepository.createRank(rank);
        return newRank;
    }

    async updateRank(id, rank) {
        await RankRepository.updateRank(id, rank);
        return { message: "Update success" };
    }

    async deleteRank(id) {
        await RankRepository.deleteRank(id);
        return { message: "Delete success" };
    }

}

module.exports = new RankService();

