const { DataTypes } = require("sequelize");
const db = require("../config/database");
const CinemaHall = require("../models/CinemaHall");
const Movie = require("../models/Movie"); 
const Cinema = require("../models/Cinema");

const Show = db.define(
  "Show",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    idCinemaHall: { 
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    idMovie: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    idCinema: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    status: {
      type: DataTypes.TINYINT(1),
      allowNull: false,
    },
    isActivated: {
      type: DataTypes.TINYINT(1),
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

Show.belongsTo(CinemaHall, { foreignKey: "idCinemaHall" });
CinemaHall.hasMany(Show, { foreignKey: "idCinemaHall" });

Show.belongsTo(Movie, { foreignKey: "idMovie" });
Movie.hasMany(Show, { foreignKey: "idMovie" });

Show.belongsTo(Cinema, { foreignKey: "idCinema" });
Cinema.hasMany(Show, { foreignKey: "idCinema" });



module.exports = Show;
