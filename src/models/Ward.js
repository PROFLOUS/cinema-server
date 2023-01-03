const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Ward', {
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
    code: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Code"
    },
    district_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "District Id",
      references: {
        model: 'District',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Ward',
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
      {
        name: "FK_District",
        using: "BTREE",
        fields: [
          { name: "district_id" },
        ]
      },
    ]
  });
};
