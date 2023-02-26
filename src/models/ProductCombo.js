const { DataTypes } = require("sequelize");
const db = require("../config/database");

const ProductCombo = db.define(
  "ProductCombo",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    productComboCode: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    productComboName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    desc: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    productCode: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = ProductCombo;
