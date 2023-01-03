const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('District', {
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
    city_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "City Id",
      references: {
        model: 'City',
        key: 'id'
      }
    },
  }, {
    sequelize,
    tableName: 'District',
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
        name: "FK_City",
        using: "BTREE",
        fields: [
          { name: "city_id" },
        ]
      },
    ]
  });
};
