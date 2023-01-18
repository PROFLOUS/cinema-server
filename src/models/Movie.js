const { DataTypes } = require("sequelize");
const db = require("../config/database");
const CategoryMovie = require("../models/CategoryMovie");

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
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    desc: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    releaseDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    linkTrailer: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    idCategoryMovie: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

Movie.belongsTo(CategoryMovie, { foreignKey: "idCategoryMovie" });
CategoryMovie.hasMany(Movie, { foreignKey: "idCategoryMovie" });

module.exports = Movie;
