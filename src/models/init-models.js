var DataTypes = require("sequelize").DataTypes;
var _Cinema = require("./Cinema");
var _CinemaHall = require("./CinemaHall");
var _CinemaHallSeat = require("./CinemaHallSeat");
var _City = require("./City");
var _Comment = require("./Comment");
var _Customer = require("./Customer");
var _District = require("./District");
var _Food = require("./Food");
var _Genre = require("./Genre");
var _Membership = require("./Membership");
var _Movie = require("./Movie");
var _PriceDetail = require("./PriceDetail");
var _PriceList = require("./PriceList");
var _PromotionFlashSale = require("./PromotionFlashSale");
var _PromotionVoucher = require("./PromotionVoucher");
var _Rank_Member = require("./Rank_Member");
var _Role = require("./Role");
var _ShowSeat = require("./ShowSeat");
var _Shows = require("./Shows");
var _Staff = require("./Staff");
var _Ticket = require("./Ticket");
var _TicketFoodDetail = require("./TicketFoodDetail");
var _VoucherCombo = require("./VoucherCombo");
var _VoucherDiscount = require("./VoucherDiscount");
var _VoucherFreeFood = require("./VoucherFreeFood");
var _Ward = require("./Ward");

function initModels(sequelize) {
  var Cinema = _Cinema(sequelize, DataTypes);
  var CinemaHall = _CinemaHall(sequelize, DataTypes);
  var CinemaHallSeat = _CinemaHallSeat(sequelize, DataTypes);
  var City = _City(sequelize, DataTypes);
  var Comment = _Comment(sequelize, DataTypes);
  var Customer = _Customer(sequelize, DataTypes);
  var District = _District(sequelize, DataTypes);
  var Food = _Food(sequelize, DataTypes);
  var Genre = _Genre(sequelize, DataTypes);
  var Membership = _Membership(sequelize, DataTypes);
  var Movie = _Movie(sequelize, DataTypes);
  var PriceDetail = _PriceDetail(sequelize, DataTypes);
  var PriceList = _PriceList(sequelize, DataTypes);
  var PromotionFlashSale = _PromotionFlashSale(sequelize, DataTypes);
  var PromotionVoucher = _PromotionVoucher(sequelize, DataTypes);
  var Rank_Member = _Rank_Member(sequelize, DataTypes);
  var Role = _Role(sequelize, DataTypes);
  var ShowSeat = _ShowSeat(sequelize, DataTypes);
  var Shows = _Shows(sequelize, DataTypes);
  var Staff = _Staff(sequelize, DataTypes);
  var Ticket = _Ticket(sequelize, DataTypes);
  var TicketFoodDetail = _TicketFoodDetail(sequelize, DataTypes);
  var VoucherCombo = _VoucherCombo(sequelize, DataTypes);
  var VoucherDiscount = _VoucherDiscount(sequelize, DataTypes);
  var VoucherFreeFood = _VoucherFreeFood(sequelize, DataTypes);
  var Ward = _Ward(sequelize, DataTypes);

  CinemaHall.belongsTo(Cinema, { as: "cinema", foreignKey: "cinema_id"});
  Cinema.hasMany(CinemaHall, { as: "CinemaHalls", foreignKey: "cinema_id"});
  Staff.belongsTo(Cinema, { as: "cinema", foreignKey: "cinema_id"});
  Cinema.hasMany(Staff, { as: "Staffs", foreignKey: "cinema_id"});
  CinemaHallSeat.belongsTo(CinemaHall, { as: "cinemaHall", foreignKey: "cinemaHall_id"});
  CinemaHall.hasMany(CinemaHallSeat, { as: "CinemaHallSeats", foreignKey: "cinemaHall_id"});
  Shows.belongsTo(CinemaHall, { as: "cinemaHall", foreignKey: "cinemaHall_id"});
  CinemaHall.hasMany(Shows, { as: "Shows", foreignKey: "cinemaHall_id"});
  PriceDetail.belongsTo(CinemaHallSeat, { as: "cinemaHallSeat", foreignKey: "cinemaHallSeat_id"});
  CinemaHallSeat.hasMany(PriceDetail, { as: "PriceDetails", foreignKey: "cinemaHallSeat_id"});
  PromotionFlashSale.belongsTo(CinemaHallSeat, { as: "cinemaHallSeat", foreignKey: "cinemaHallSeat_id"});
  CinemaHallSeat.hasMany(PromotionFlashSale, { as: "PromotionFlashSales", foreignKey: "cinemaHallSeat_id"});
  ShowSeat.belongsTo(CinemaHallSeat, { as: "cinemaSeat", foreignKey: "cinemaSeat_id"});
  CinemaHallSeat.hasMany(ShowSeat, { as: "ShowSeats", foreignKey: "cinemaSeat_id"});
  District.belongsTo(City, { as: "city", foreignKey: "city_id"});
  City.hasMany(District, { as: "Districts", foreignKey: "city_id"});
  Comment.belongsTo(Customer, { as: "customer", foreignKey: "customer_id"});
  Customer.hasMany(Comment, { as: "Comments", foreignKey: "customer_id"});
  Membership.belongsTo(Customer, { as: "id_Customer", foreignKey: "id"});
  Customer.hasOne(Membership, { as: "Membership", foreignKey: "id"});
  PromotionVoucher.belongsTo(Customer, { as: "customer", foreignKey: "customer_id"});
  Customer.hasMany(PromotionVoucher, { as: "PromotionVouchers", foreignKey: "customer_id"});
  Ticket.belongsTo(Customer, { as: "customer", foreignKey: "customer_id"});
  Customer.hasMany(Ticket, { as: "Tickets", foreignKey: "customer_id"});
  Ward.belongsTo(District, { as: "district", foreignKey: "district_id"});
  District.hasMany(Ward, { as: "Wards", foreignKey: "district_id"});
  PriceDetail.belongsTo(Food, { as: "food", foreignKey: "food_id"});
  Food.hasMany(PriceDetail, { as: "PriceDetails", foreignKey: "food_id"});
  TicketFoodDetail.belongsTo(Food, { as: "food", foreignKey: "food_id"});
  Food.hasMany(TicketFoodDetail, { as: "TicketFoodDetails", foreignKey: "food_id"});
  Movie.belongsTo(Genre, { as: "genre", foreignKey: "genre_id"});
  Genre.hasMany(Movie, { as: "Movies", foreignKey: "genre_id"});
  Rank_Member.belongsTo(Membership, { as: "membership", foreignKey: "membership_id"});
  Membership.hasMany(Rank_Member, { as: "Rank_Members", foreignKey: "membership_id"});
  Comment.belongsTo(Movie, { as: "movie", foreignKey: "movie_id"});
  Movie.hasMany(Comment, { as: "Comments", foreignKey: "movie_id"});
  PromotionFlashSale.belongsTo(Movie, { as: "show", foreignKey: "show_id"});
  Movie.hasMany(PromotionFlashSale, { as: "PromotionFlashSales", foreignKey: "show_id"});
  Shows.belongsTo(Movie, { as: "movie", foreignKey: "movie_id"});
  Movie.hasMany(Shows, { as: "Shows", foreignKey: "movie_id"});
  TicketFoodDetail.belongsTo(PriceDetail, { as: "price", foreignKey: "price_id"});
  PriceDetail.hasMany(TicketFoodDetail, { as: "TicketFoodDetails", foreignKey: "price_id"});
  PriceDetail.belongsTo(PriceList, { as: "priceList", foreignKey: "priceList_id"});
  PriceList.hasMany(PriceDetail, { as: "PriceDetails", foreignKey: "priceList_id"});
  VoucherCombo.belongsTo(PromotionVoucher, { as: "voucher", foreignKey: "voucher_id"});
  PromotionVoucher.hasMany(VoucherCombo, { as: "VoucherCombos", foreignKey: "voucher_id"});
  VoucherDiscount.belongsTo(PromotionVoucher, { as: "voucher", foreignKey: "voucher_id"});
  PromotionVoucher.hasMany(VoucherDiscount, { as: "VoucherDiscounts", foreignKey: "voucher_id"});
  VoucherFreeFood.belongsTo(PromotionVoucher, { as: "voucher", foreignKey: "voucher_id"});
  PromotionVoucher.hasMany(VoucherFreeFood, { as: "VoucherFreeFoods", foreignKey: "voucher_id"});
  ShowSeat.belongsTo(Shows, { as: "show", foreignKey: "show_id"});
  Shows.hasMany(ShowSeat, { as: "ShowSeats", foreignKey: "show_id"});
  Ticket.belongsTo(Shows, { as: "show", foreignKey: "show_id"});
  Shows.hasMany(Ticket, { as: "Tickets", foreignKey: "show_id"});
  Role.belongsTo(Staff, { as: "staff", foreignKey: "staff_id"});
  Staff.hasMany(Role, { as: "Roles", foreignKey: "staff_id"});
  Staff.belongsTo(Staff, { as: "manager", foreignKey: "manager_id"});
  Staff.hasMany(Staff, { as: "Staffs", foreignKey: "manager_id"});
  PromotionVoucher.belongsTo(Ticket, { as: "ticket", foreignKey: "ticket_id"});
  Ticket.hasMany(PromotionVoucher, { as: "PromotionVouchers", foreignKey: "ticket_id"});
  ShowSeat.belongsTo(Ticket, { as: "ticket", foreignKey: "ticket_id"});
  Ticket.hasMany(ShowSeat, { as: "ShowSeats", foreignKey: "ticket_id"});
  TicketFoodDetail.belongsTo(Ticket, { as: "ticket", foreignKey: "ticket_id"});
  Ticket.hasMany(TicketFoodDetail, { as: "TicketFoodDetails", foreignKey: "ticket_id"});
  Cinema.belongsTo(Ward, { as: "ward", foreignKey: "ward_id"});
  Ward.hasMany(Cinema, { as: "Cinemas", foreignKey: "ward_id"});
  Customer.belongsTo(Ward, { as: "ward", foreignKey: "ward_id"});
  Ward.hasMany(Customer, { as: "Customers", foreignKey: "ward_id"});
  Staff.belongsTo(Ward, { as: "ward", foreignKey: "ward_id"});
  Ward.hasMany(Staff, { as: "Staffs", foreignKey: "ward_id"});

  return {
    Cinema,
    CinemaHall,
    CinemaHallSeat,
    City,
    Comment,
    Customer,
    District,
    Food,
    Genre,
    Membership,
    Movie,
    PriceDetail,
    PriceList,
    PromotionFlashSale,
    PromotionVoucher,
    Rank_Member,
    Role,
    ShowSeat,
    Shows,
    Staff,
    Ticket,
    TicketFoodDetail,
    VoucherCombo,
    VoucherDiscount,
    VoucherFreeFood,
    Ward,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
