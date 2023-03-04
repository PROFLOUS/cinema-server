const { DataTypes } = require("sequelize");
const db = require("../config/database");

const ComboItem = db.define(
  "ComboItem",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    productId1: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    quantity1: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    productId2: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    quantity2: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    productId3: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    quantity3: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = ComboItem;
