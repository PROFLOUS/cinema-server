const CinemaRepository = require('../repository/cinema.repository');

class CinemaService {


    async getAllCinema() {
        return await CinemaRepository.getAllCinema();
    }

    async getCinemaById(id) {
        return await CinemaRepository.getCinemaById(id);
    }

    async getCinemaByName(name) {
        return await CinemaRepository.getCinemaByName(name);
    }

    async createCinema(cinema) {
        return await CinemaRepository.createCinema(cinema);
    }

    async updateCinema(id, cinema) {
        await CinemaRepository.updateCinema(id, cinema);
        return { message: 'Update success' };
    }

    async deleteCinema(id) {
        await CinemaRepository.deleteCinema(id);
        return { message: 'Delete success' };
    }

    async getCinemaByCity(city) {
        return await CinemaRepository.getCinemaByCity(city);
    }

}

module.exports = new CinemaService();