const MemberShipService = require('../services/menberShip.service');

class MemberShipController {


  // [GET] /memberShips/:id
  async getMemberShipById(req, res) {
    try {
      const memberShip = await MemberShipService.getMemberShipById(req.params.id);
      res.status(200).json(memberShip);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [GET] /memberShips/code/:code
  async getMemberShipByCode(req, res) {
    try {
      const memberShip = await MemberShipService.getMemberShipByCode(
        req.params.code
      );
      res.status(200).json(memberShip);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [GET] /memberShips/customer/:id
  async getMemberShipByCustomerId(req, res) {
    try {
      const memberShips = await MemberShipService.getMemberShipByCustomerId(
        req.params.id
      );
      res.status(200).json(memberShips);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [GET] /memberShips/rank/:id
  async getMemberShipByRankId(req, res) {
    try {
      const memberShips = await MemberShipService.getMemberShipByRankId(
        req.params.id
      );
      res.status(200).json(memberShips);
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  // [POST] /memberShips
  async createMemberShip(req, res) {
    try {
      const memberShip = await MemberShipService.createMemberShip(req.body);
      res.status(201).json(memberShip);
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        });
        }
    }

    // [PUT] /memberShips/:id
    async updateMemberShip(req, res) {
        try {
        const memberShip = req.body;
        const id = req.params.id;
        const result = await MemberShipService.updateMemberShip(id, memberShip);
        res.status(200).json(result);
        } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        });
        }
    }

    // [DELETE] /memberShips/:id
    async deleteMemberShip(req, res) {
        try {
        const id = req.params.id;
        const result = await MemberShipService.deleteMemberShip(id);
        res.status(200).json(result);
        } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        });
        }
    }

    
}

module.exports = new MemberShipController();
    