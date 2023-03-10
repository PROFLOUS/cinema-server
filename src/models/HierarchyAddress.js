const { DataTypes } = require("sequelize");
const db = require("../config/database");

const HierarchyAddress = db.define(
  "HierarchyAddress",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    value: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    parentCode: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = HierarchyAddress;
