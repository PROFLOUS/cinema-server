const authRouter = require('./auth.route');
const cinemaRouter = require('./cinema.route');
const cinemaHallRouter = require('./cinemaHall.route');
const addressRouter = require('./address.route');
const addressPathRouter = require('./address_path.route');
const movieRouter = require('./movie.route');
const categoryRouter = require('./category.route');
const route = (app) => {

    app.use('/auth', authRouter);
    app.use('/cinema', cinemaRouter);
    app.use('/cinemaHall', cinemaHallRouter);
    app.use('/address', addressRouter);
    app.use('/addressPath', addressPathRouter);
    app.use('/movie', movieRouter);
    app.use('/category', categoryRouter);





    app.use('/test', (req, res) => {
        res.send("Hello World !!!!");
    });
};

module.exports = route;