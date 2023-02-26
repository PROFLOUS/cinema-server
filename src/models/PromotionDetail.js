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

module.exports = PromotionDetail;
