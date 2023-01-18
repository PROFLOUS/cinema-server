const { DataTypes } = require("sequelize");
const db = require("../config/database");
const AddressPath = require("../models/AddressPath");

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
      allowNull: false,
      comment: "Email",
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false,
      comment: "Password",
    },
    isActivated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
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
      allowNull: false,
      comment: "Gender",
    },
    idAddressPath: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    brithday: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    refreshToken: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

Customer.belongsTo(AddressPath, { foreignKey: "idAddressPath" });
AddressPath.hasMany(Customer, { foreignKey: "idAddressPath" });



module.exports = Customer;
