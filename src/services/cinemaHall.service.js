const CinemaHallRepository = require('../repositories/cinemaHalls.repository');

class CinemaHallService {

    async getAllCinemaHall() {
        return await CinemaHallRepository.getAllCinemaHall();
    }

    async getCinemaHallById(id) {
        return await CinemaHallRepository.getCinemaHallById(id);
    }

    async getCinemaHallByName(name) {
        return await CinemaHallRepository.getCinemaHallByName(name);
    }

    async getCinemaHallByCinemaId(cinemaId) {
        return await CinemaHallRepository.getCinemaHallByCinemaId(cinemaId);
    }

    async createCinemaHall(cinemaHall) {
        return await CinemaHallRepository.createCinemaHall(cinemaHall);
    }

    async updateCinemaHall(id, cinemaHall) {
        await CinemaHallRepository.updateCinemaHall(id, cinemaHall);
        return { message: 'Update success' };
    }

    async deleteCinemaHall(id) {
        await CinemaHallRepository.deleteCinemaHall(id);
        return { message: 'Delete success' };
    }

}

module.exports = new CinemaHallService();