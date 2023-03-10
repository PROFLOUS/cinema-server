const { DataTypes } = require("sequelize");
const db = require("../config/database");
const CinemaHall = require("../models/CinemaHall");

const CinemaHallSeat = db.define(
  "CinemaHallSeat",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    seatRow: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    seatColumn: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    statusSeat: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    idCinemaHall: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    status:{
      type: DataTypes.TINYINT(1),
      allowNull: false,
      defaultValue: 1,
    }
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

CinemaHallSeat.belongsTo(CinemaHall, { foreignKey: "idCinemaHall" });
CinemaHall.hasMany(CinemaHallSeat, { foreignKey: "idCinemaHall" });

module.exports = CinemaHallSeat;
