const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Food', {
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
    size: {
      type: DataTypes.STRING(5),
      allowNull: false,
      comment: "Size"
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Quantity"
    },
    type: {
      type: DataTypes.ENUM('COCACOLA','PEPSI','CHEESE','NORMAL'),
      allowNull: false,
      comment: "Type"
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Description"
    },
    sold: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Sold"
    },
    create_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Create Time"
    },
    update_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Update Time"
    }
  }, {
    sequelize,
    tableName: 'Food',
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
