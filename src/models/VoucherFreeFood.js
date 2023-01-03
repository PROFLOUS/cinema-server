const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VoucherFreeFood', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "Primary Key"
    },
    total_ticket: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Total Ticket"
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
    tableName: 'VoucherFreeFood',
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
