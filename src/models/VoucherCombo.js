const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VoucherCombo', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "Primary Key"
    },
    total_food: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Total Food"
    },
    total_ticket: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Total Ticket"
    },
    price_must_pay: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      comment: "Price Must Pay"
    },
    voucher_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Voucher Id",
      references: {
        model: 'PromotionVoucher',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'VoucherCombo',
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
        name: "voucher_id",
        using: "BTREE",
        fields: [
          { name: "voucher_id" },
        ]
      },
    ]
  });
};
