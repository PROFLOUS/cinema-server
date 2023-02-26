const MemberShipRepository = require('../repositories/menberShip.repository');

class MemberShipService {


    async getMemberShipById(id) {
        return await MemberShipRepository.getMemberShipById(id);
    }

    async getMemberShipByCode(code) {
        return await MemberShipRepository.getMemberShipByCode(code);
    }

    async getMemberShipByCustomerId(id) {
        return await MemberShipRepository.getMemberShipByCustomerId(id);
    }

    async getMemberShipByRankId(id) {
        return await MemberShipRepository.getMemberShipByRankId(id);
    }

    async createMemberShip(memberShip) {
        console.log("mb",memberShip);
        memberShip.startDate = new Date();
        memberShip.menberShipCode = "MS" + Math.floor(Math.random() * 1000000);
        return await MemberShipRepository.createMemberShip(memberShip);
    }

    async updateMemberShip(id, memberShip) {
        return await MemberShipRepository.updateMemberShip(id, memberShip);
    }

    async deleteMemberShip(id) {
        return await MemberShipRepository.deleteMemberShip(id);
    }

    async getInfoCustomer(id) {
        return await MemberShipRepository.GetInfoCustomer(id);
    }

}

module.exports = new MemberShipService();