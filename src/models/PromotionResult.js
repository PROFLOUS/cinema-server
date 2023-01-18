const { DataTypes } = require("sequelize");
const db = require("../config/database");
const PromotionHeader = require("./PromotionHeader");
const PromotionLine = require("./PromotionLine");
const Ticket = require("./Ticket");

const PromotionResult = db.define(
  "PromotionResult",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    note: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    result: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    idProductRecive: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    moneyDiscount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    idPromotionLine: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    idPromotionHeader: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    idTicket: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

PromotionResult.belongsTo(PromotionHeader, { foreignKey: "idPromotionHeader" });
PromotionHeader.hasMany(PromotionResult, { foreignKey: "idPromotionHeader" });

PromotionResult.belongsTo(PromotionLine, { foreignKey: "idPromotionLine" });
PromotionLine.hasMany(PromotionResult, { foreignKey: "idPromotionLine" });

PromotionResult.belongsTo(Ticket, { foreignKey: "idTicket" });
Ticket.hasMany(PromotionResult, { foreignKey: "idTicket" });

module.exports = PromotionResult;
