const Rank = require("../models/Rank");

class RankRepository {
    async getAllRank() {
        return await Rank.findAll();
    }

    async getRankById(id) {
        return await Rank.findOne({
            where: {
                id: id
            }
        });
    }

    async getRankByName(name) {
        return await Rank.findOne({
            where: {
                nameRank: name
            }
        });
    }

    async createRank(rank) {
        return await Rank.create(rank);
    }

    async updateRank(id, rank) {
        return await Rank.update(rank, {
            where: {
                id: id
            }
        });
    }

    async deleteRank(id) {
        return await Rank.destroy({
            where: {
                id: id
            }
        });
    }

}

module.exports = new RankRepository();