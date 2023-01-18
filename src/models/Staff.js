const { DataTypes } = require("sequelize");
const db = require("../config/database");
const AddressPath = require("../models/AddressPath");
const Cinema = require("../models/Cinema");

const Staff = db.define(
  "Staff",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    isActivated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    manager_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    cinema_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    salt: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    refreshTokens: {
      type: DataTypes.STRING(255),
      allowNull: true,
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

Staff.belongsTo(AddressPath, { foreignKey: "idAddressPath" });
AddressPath.hasMany(Staff, { foreignKey: "idAddressPath" });
Staff.belongsTo(Cinema, { foreignKey: "cinema_id" });
Cinema.hasMany(Staff, { foreignKey: "cinema_id" });
Staff.belongsTo(Staff, { foreignKey: "manager_id" });
Staff.hasMany(Staff, { foreignKey: "manager_id" });

module.exports = Staff;
