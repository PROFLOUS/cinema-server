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
      allowNull: true,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: true,
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
    city_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    district_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    ward_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

Staff.belongsTo(Cinema, { foreignKey: "cinema_id" });
Cinema.hasMany(Staff, { foreignKey: "cinema_id" });
Staff.belongsTo(Staff, { foreignKey: "manager_id" });
Staff.hasMany(Staff, { foreignKey: "manager_id" });

module.exports = Staff;
