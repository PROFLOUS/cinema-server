const { DataTypes } = require("sequelize");
const db = require("../config/database");
const PromotionLine = require("./PromotionLine");

const PromotionDetail = db.define(
  "PromotionDetail",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    moneyDiscount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    numberOfTicketBought: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    promotionCode: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    idProductBuy: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    idProductReceive: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    numberOfProductReceive: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    budget: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    maxQtyPerCustomer: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pointChange: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    qtyUsed: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    rankWillBeUsed: {
      type: DataTypes.STRING(20),
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

module.exports = PromotionDetail;
