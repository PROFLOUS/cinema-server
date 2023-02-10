const CinemaHallSeatRepository = require("../repository/cinemaHallSeat.repository");
const redisDb = require("../config/redis");
class CinemaHallSeatService {

    async getAllCinemaHallSeat() {
        return await CinemaHallSeatRepository.getAllCinemaHallSeat();
    }

    async getCinemaHallSeatById(id) {
        return await CinemaHallSeatRepository.getCinemaHallSeatById(id);
    }

    async getCinemaHallSeatByCinemaHallId(id) {
        const seatOnCinema = await redisDb.get('seatOnCinema');
        if(seatOnCinema){
            console.log("Get data from redis");
            return JSON.parse(seatOnCinema);
        }
        const data = await CinemaHallSeatRepository.getCinemaHallSeatByCinemaHallId(id);
        console.log("Get data from database");
        await redisDb.set('seatOnCinema', JSON.stringify(data), 60);
        return data;
    }

    async createCinemaHallSeat(cinemaHallSeat) {
        return await CinemaHallSeatRepository.createCinemaHallSeat(cinemaHallSeat);
    }

    async updateCinemaHallSeat(id, cinemaHallSeat) {
        await CinemaHallSeatRepository.updateCinemaHallSeat(id, cinemaHallSeat);
        return { message: "Update success" };
    }

    async deleteCinemaHallSeat(id) {
        await CinemaHallSeatRepository.deleteCinemaHallSeat(id);
        return { message: "Delete success" };
    }

}

module.exports = new CinemaHallSeatService();
