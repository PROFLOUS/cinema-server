const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PriceList', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "Primary Key"
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "Start Date"
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "End Date"
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Status"
    },
    note: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Note"
    }
  }, {
    sequelize,
    tableName: 'PriceList',
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
