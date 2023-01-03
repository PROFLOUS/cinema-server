const authRouter = require('./auth.route');
const cinemaRouter = require('./cinema.route');
const cinemaHallRouter = require('./cinemaHall.route');
const route = (app) => {
    const cityRouter = require('./city.route');

    app.use('/city', cityRouter());
    app.use('/auth', authRouter);
    app.use('/cinema', cinemaRouter);
    app.use('/cinemaHall', cinemaHallRouter);
};

module.exports = route;