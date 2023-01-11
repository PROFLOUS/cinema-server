const authRouter = require('./auth.route');
const cinemaRouter = require('./cinema.route');
const cinemaHallRouter = require('./cinemaHall.route');
const addressRouter = require('./address.route');
const route = (app) => {

    app.use('/auth', authRouter);
    app.use('/cinema', cinemaRouter);
    app.use('/cinemaHall', cinemaHallRouter);
    app.use('/address', addressRouter);
};

module.exports = route;