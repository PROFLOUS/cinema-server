const { DataTypes } = require("sequelize");
const db = require("../config/database");

const PromotionLine = db.define(
  "PromotionLine",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    promotionCode: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    desc: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    status : {
      type: DataTypes.TINYINT(1),
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    max_qty_per_customer: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    max_qty : {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    max_qty_per_customer_per_day: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    max_money : {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    promotionHeaderId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = PromotionLine;
