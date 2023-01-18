const { DataTypes } = require("sequelize");
const db = require("../config/database");
const Product = require("../models/Product");
const PriceHeader = require("../models/PriceHeader");

const PriceLine = db.define(
  "PriceLine",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    productCode: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    idProduct: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    idPriceHeader: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

PriceLine.belongsTo(Product, { foreignKey: "idProduct" });
Product.hasMany(PriceLine, { foreignKey: "idProduct" });

PriceLine.belongsTo(PriceHeader, { foreignKey: "idPriceHeader" });
PriceHeader.hasMany(PriceLine, { foreignKey: "idPriceHeader" });

module.exports = PriceLine;
