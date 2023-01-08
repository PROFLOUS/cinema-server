const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CustomerVoucher', {
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    usedDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Customer_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Customer',
        key: 'id'
      }
    },
    PromotionVoucher_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'PromotionVoucher',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'CustomerVoucher',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
      {
        name: "fk_CustomerVoucher_Customer1_idx",
        using: "BTREE",
        fields: [
          { name: "Customer_id" },
        ]
      },
      {
        name: "fk_CustomerVoucher_PromotionVoucher1_idx",
        using: "BTREE",
        fields: [
          { name: "PromotionVoucher_id" },
        ]
      },
    ]
  });
};
