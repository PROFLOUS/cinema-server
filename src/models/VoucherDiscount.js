const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VoucherDiscount', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "Primary Key"
    },
    save_money: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      comment: "Save Money"
    },
    condition_apply: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Condition"
    },
    percent: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      comment: "Percent"
    },
    voucher_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Voucher Id",
      references: {
        model: 'PromotionVoucher',
        key: 'id'
      }
    },
    create_at: {
      type: DataTypes.DATE(6),
      allowNull: true,
      comment: "Create Time"
    },
    update_at: {
      type: DataTypes.DATE(6),
      allowNull: true,
      comment: "Update Time"
    }
  }, {
    sequelize,
    tableName: 'VoucherDiscount',
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
        name: "voucher_id",
        using: "BTREE",
        fields: [
          { name: "voucher_id" },
        ]
      },
    ]
  });
};
