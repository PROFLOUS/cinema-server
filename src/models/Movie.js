const { DataTypes } = require("sequelize");
const db = require("../config/database");
const CategoryMovie = require("../models/CategoryMovie");
const Cinema = require("../models/Cinema");


const Movie = db.define(
  "Movie",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    nameMovie: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    cast: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    director: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    desc: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    classify: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    releaseDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    linkTrailer: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    idCategoryMovie: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    idCinema: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    isActived: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

Movie.belongsTo(CategoryMovie, { as:'category', foreignKey: "idCategoryMovie" });
CategoryMovie.hasMany(Movie, { foreignKey: "idCategoryMovie" });

Movie.belongsTo(Cinema, { as:'cinema', foreignKey: "idCinema" });
Cinema.hasMany(Movie, { foreignKey: "idCinema" });



module.exports = Movie;
