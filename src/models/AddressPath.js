const { DataTypes } = require("sequelize");
const db = require("../config/database");

const AddressPath = db.define("AddressPath", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  HierarchyAddressCity_id: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  HierarchyAddressDistrict_id: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  HierarchyAddressWard_id: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
},{
  freezeTableName: true,
}
);

module.exports = AddressPath;
