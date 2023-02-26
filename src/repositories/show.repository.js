const Show = require("../models/Show");
const { Op } = require('sequelize');
const Cinema = require("../models/Cinema");
const Movie = require("../models/Movie");
class ShowRepository {
    async getAllShow() {
        return await Show.findAll();
    }

    async getShowById(id) {
        return await Show.findOne({
            where: {
                id: id
            }
        });
    }
    

    async getShowByMovieId(req) {
        const id = req.params.movieId;
        const date = req.query.date;
        console.log(date);
        const datequery = new Date(date);
        return await Show.findAll({
            where: {
                idMovie: id,
                showDate: {
                    [Op.eq]: datequery
                }
            },
            include: [
                {
                    model: Cinema,
            
                    attributes: ["id", "name"],
                },
            ],
        });
    }


    async getShowByCinemaId(req) {
        const id = req.params.cinemaId;
        const date = req.query.date;
        const datequery = new Date(date);
        return await Show.findAll({
            where: {
                idCinema: id,
                showDate: {
                    [Op.eq]: datequery
                }
            },
            include: [
                {
                    model: Movie,
                    attributes: ["id", "nameMovie", "image"],
                },
            ],
        });
    }

    async createShow(show) {
        return await Show.create(show);
    }

    async updateShow(id, show) {
        return await Show.update(show, {
            where: {
                id: id
            }
        });
    }

    async deleteShow(id) {
        return await Show.destroy({
            where: {
                id: id
            }
        });
    }

}

module.exports = new ShowRepository();