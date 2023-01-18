const { DataTypes } = require("sequelize");
const db = require("../config/database");
const AddressPath = require("../models/AddressPath");

const Cinema = db.define(
  "Cinema",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    totalCinemaHalls: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idAddressPath: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

Cinema.belongsTo(AddressPath, { foreignKey: "idAddressPath" });
AddressPath.hasMany(Cinema, { foreignKey: "idAddressPath" });

module.exports = Cinema;
