const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PromotionVoucher', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "Primary Key"
    },
    type: {
      type: DataTypes.STRING(15),
      allowNull: false,
      comment: "Type"
    },
    start_date: {
      type: DataTypes.DATE(6),
      allowNull: false,
      comment: "Start Date"
    },
    end_date: {
      type: DataTypes.DATE(6),
      allowNull: false,
      comment: "End Date"
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: "Status"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Title"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Description"
    },
    promotionCode: {
      type: DataTypes.STRING(15),
      allowNull: false,
      comment: "Promotion Code"
    },
    maxQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Max Quantity"
    },
    maxQuantityPerCustomer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Max Quantity Per Customer"
    },
    maxQuantityPerCustomerPerDay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Max Quantity Per Customer Per Day"
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Note"
    },
    condition_apply: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Condition"
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "Image"
    },
    quantity_used: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Quantity"
    },
    rank_will_be_use: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Rank Will Be Use"
    },
    valueInPoint: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Value In Point"
    },
    qtySendToCustomer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Qty Send To Customer"
    },
    ticket_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Ticket Id",
      references: {
        model: 'Ticket',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'PromotionVoucher',
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
        name: "ticket_id",
        using: "BTREE",
        fields: [
          { name: "ticket_id" },
        ]
      },
    ]
  });
};
