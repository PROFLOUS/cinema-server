const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Product = db.define(
  "Product",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    productCode: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    productName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    typeHall: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    comboItemId: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    desc: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

Product.belongsTo(Product, { as: "parent", foreignKey: "parentId" });
Product.hasMany(Product, { as: "children", foreignKey: "parentId" });

module.exports = Product;
