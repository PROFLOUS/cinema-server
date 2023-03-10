const authRouter = require("./auth.route");
const cinemaRouter = require("./cinema.route");
const cinemaHallRouter = require("./cinemaHall.route");
const movieRouter = require("./movie.route");
const categoryRouter = require("./category.route");
const cinemaHallSeatRouter = require("./cinemaHallSeat.route");
const showRouter = require("./show.route");
const promotionHeaderRouter = require("./promotionHeader.route");
const promotionLineRouter = require("./promotionLine.route");
const promotionDetailRouter = require("./promotionDetail.route");
const productGroupRouter = require("./productGroup.route");
const productRouter = require("./product.route");
const rankRouter = require("./rank.route");
const memberShipRouter = require("./menberShip.route");
const customerRouter = require("./customer.route");
const priceHeaderRouter = require("./priceHeader.route");
const priceLineRouter = require("./priceLine.route");
const staffRouter = require("./staff.route");
const showTimeRouter = require("./showTime.route");
const roleRouter = require("./role.route");

const route = (app) => {
  app.use("/auth", authRouter);
  app.use("/cinema", cinemaRouter);
  app.use("/cinemaHall", cinemaHallRouter);
  app.use("/movie", movieRouter);
  app.use("/category", categoryRouter);
  app.use("/cinemaHallSeat", cinemaHallSeatRouter);
  app.use("/show", showRouter);
  app.use("/promotionHeader", promotionHeaderRouter);
  app.use("/promotionLine", promotionLineRouter);
  app.use("/promotionDetail", promotionDetailRouter);
  app.use("/productGroup", productGroupRouter);
  app.use("/product", productRouter);
  app.use("/rank", rankRouter);
  app.use("/memberShip", memberShipRouter);
  app.use("/customer", customerRouter);
  app.use("/priceHeader", priceHeaderRouter);
  app.use("/priceLine", priceLineRouter);
  app.use("/staff", staffRouter);
  app.use("/showTime", showTimeRouter);
  app.use("/role", roleRouter);

  app.use("/test", (req, res) => {
    res.send("Hello World !!!!");
  });
};

module.exports = route;
