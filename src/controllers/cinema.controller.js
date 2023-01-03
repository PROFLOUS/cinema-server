const CinemaService = require('../services/cinema.services');

class CinemaController {

    //[GET] /cinema
    async getAllCinema(req, res) {
        try{
            const rs = await CinemaService.getAllCinema();
            res.status(200).json(rs);
        }catch(err){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }

    //[GET] /cinema/:id
    async getCinemaById(req, res) {
        try{
            const rs = await CinemaService.getCinemaById(req.params.id);
            res.status(200).json(rs);
        }catch(err){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }

    //[GET] /cinema/name/:name
    async getCinemaByName(req, res) {
        try{
            const rs = await CinemaService.getCinemaByName(req.params.name);
            res.status(200).json(rs);
        }catch(err){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }

    //[POST] /cinema
    async createCinema(req, res) {
        try{
            const rs = await CinemaService.createCinema(req.body);
            res.status(201).json(rs);
        }catch(err){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }

    //[PUT] /cinema/:id
    async updateCinema(req, res) {
        try{
            const rs = await CinemaService.updateCinema(req.params.id, req.body);
            res.status(200).json(rs);
        }catch(err){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }

    //[DELETE] /cinema/:id
    async deleteCinema(req, res) {
        try{
            const rs = await CinemaService.deleteCinema(req.params.id);
            res.status(200).json(rs);
        }catch(err){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }

    //[GET] /cinema/city/:city
    
}

module.exports = new CinemaController();
