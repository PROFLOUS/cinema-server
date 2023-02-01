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
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.DATE,
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
