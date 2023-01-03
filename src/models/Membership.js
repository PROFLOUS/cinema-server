const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Membership', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "Primary Key",
      references: {
        model: 'Customer',
        key: 'id'
      }
    },
    point_hightest: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Point Hightest"
    },
    current_point: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Current Point"
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Description"
    }
  }, {
    sequelize,
    tableName: 'Membership',
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
