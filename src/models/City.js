const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('City', {
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
    }
  }, {
    sequelize,
    tableName: 'City',
    timestamps: false,
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
