const authRouter = require("./auth.route");
const cinemaRouter = require("./cinema.route");
const cinemaHallRouter = require("./cinemaHall.route");
const movieRouter = require("./movie.route");
const categoryRouter = require("./category.route");
const cinemaHallSeatRouter = require("./cinemaHallSeat.route");
const showRouter = require("./show.route");
const route = (app) => {
  app.use("/auth", authRouter);
  app.use("/cinema", cinemaRouter);
  app.use("/cinemaHall", cinemaHallRouter);
  app.use("/movie", movieRouter);
  app.use("/category", categoryRouter);
  app.use("/cinemaHallSeat", cinemaHallSeatRouter);
  app.use("/show", showRouter);

  app.use("/test", (req, res) => {
    res.send("Hello World !!!!");
  });
};

module.exports = route;
