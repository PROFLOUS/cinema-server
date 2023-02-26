const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Customer = db.define(
  "Customer",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "Primary Key",
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Email",
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: true,
      comment: "Password",
    },
    isActivated: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "Is Activated",
    },
    phone: {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "Phone Number",
    },
    firstName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "First Name",
    },
    lastName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "Last Name",
    },
    gender: {
      type: DataTypes.STRING(1),
      allowNull: true,
      comment: "Gender",
    },
    city_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    district_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    ward_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    street: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    salt: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Customer;
