const CinemaHallService = require('../services/cinemaHall.services');

class CinemaHallController {

    //[GET] /cinemaHall
    async getAllCinemaHall(req, res) {
        try{
            const rs = await CinemaHallService.getAllCinemaHall();
            res.status(200).json(rs);
        }catch(err){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }

    //[GET] /cinemaHall/:id
    async getCinemaHallById(req, res) {
        try{
            const rs = await CinemaHallService.getCinemaHallById(req.params.id);
            res.status(200).json(rs);
        }catch(err){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }

    //[GET] /cinemaHall/name/:name
    async getCinemaHallByName(req, res) {
        try{
            const rs = await CinemaHallService.getCinemaHallByName(req.params.name);
            res.status(200).json(rs);
        }catch(err){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }

    //[POST] /cinemaHall
    async createCinemaHall(req, res) {
        try{
            const rs = await CinemaHallService.createCinemaHall(req.body);
            res.status(201).json(rs);
        }catch(err){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }

    //[PUT] /cinemaHall/:id
    async updateCinemaHall(req, res) {
        try{
            const rs = await CinemaHallService.updateCinemaHall(req.params.id, req.body);
            res.status(200).json(rs);
        }catch(err){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }

    //[DELETE] /cinemaHall/:id
    async deleteCinemaHall(req, res) {
        try{
            const rs = await CinemaHallService.deleteCinemaHall(req.params.id);
            res.status(200).json(rs);
        }catch(err){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }

}

module.exports = new CinemaHallController();