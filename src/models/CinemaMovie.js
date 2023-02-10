const { DataTypes } = require("sequelize");
const db = require("../config/database");
const Cinema = require("../models/Cinema");
const Movie = require("../models/Movie");

const CinemaMovie = db.define(
  "CinemaMovie",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    idCinema: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    idMovie: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

CinemaMovie.belongsTo(Cinema, { foreignKey: "idCinema" });
Cinema.hasMany(CinemaMovie, { foreignKey: "idCinema" });

CinemaMovie.belongsTo(Movie, { foreignKey: "idMovie" });
Movie.hasMany(CinemaMovie, { foreignKey: "idMovie" });

module.exports = CinemaMovie;
