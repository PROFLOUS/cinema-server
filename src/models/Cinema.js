const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Cinema', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "Primary Key"
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Name"
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Address"
    },
    totalCinemaHalls: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Total Cinema Hall"
    },
    HierarchyAddressCity_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    HierarchyAddressDistrict_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    HierarchyAddressWard_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Cinema',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
