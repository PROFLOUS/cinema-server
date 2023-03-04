const { DataTypes } = require("sequelize");
const db = require("../config/database");
const Rank = require("./Rank");

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
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    rank_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

Customer.belongsTo(Rank,{foreignKey: "rank_id"});
Rank.hasMany(Customer,{foreignKey: "rank_id"});

module.exports = Customer;
