const { DataTypes } = require("sequelize");
const db = require("../config/database");

const PromotionHeader = db.define(
  "PromotionHeader",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    namePromotion: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    desc: {
      type: DataTypes.TEXT("long"),
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
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    statusPromotion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = PromotionHeader;
