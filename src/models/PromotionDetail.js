const { DataTypes } = require("sequelize");
const db = require("../config/database");
const PromotionLine = require("./PromotionLine");
const Product = require("./Product");

const PromotionDetail = db.define(
  "PromotionDetail",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    IdProduct_buy: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    IdProduct_receive: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    qty_buy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    qty_receive: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    total_purchase_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    money_received: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    percent_reduction: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    idPromotionLine: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

PromotionDetail.belongsTo(PromotionLine, { foreignKey: "idPromotionLine" });
PromotionLine.hasOne(PromotionDetail);

PromotionDetail.belongsTo(Product, {as: "product_recive", foreignKey: "IdProduct_receive" });
Product.hasMany(PromotionDetail, {
  foreignKey: "IdProduct_receive",
});

PromotionDetail.belongsTo(Product, {as: "product_buy", foreignKey: "IdProduct_buy" });
Product.hasMany(PromotionDetail, {
  foreignKey: "IdProduct_buy",
});

module.exports = PromotionDetail;
