const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Role', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "Primary Key"
    },
    nameRole: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Name"
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Description"
    },
    staff_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "Staff Id",
      references: {
        model: 'Staff',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Role',
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
      {
        name: "staff_id",
        using: "BTREE",
        fields: [
          { name: "staff_id" },
        ]
      },
    ]
  });
};
