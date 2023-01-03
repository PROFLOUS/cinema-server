const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TicketFoodDetail', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "Primary Key"
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Quantity"
    },
    totalPrice: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      comment: "Total Price"
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Note"
    },
    ticket_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Ticket Id",
      references: {
        model: 'Ticket',
        key: 'id'
      }
    },
    food_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Food Id",
      references: {
        model: 'Food',
        key: 'id'
      }
    },
    price_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Price Id",
      references: {
        model: 'PriceDetail',
        key: 'id'
      }
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
    tableName: 'TicketFoodDetail',
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
        name: "ticket_id",
        using: "BTREE",
        fields: [
          { name: "ticket_id" },
        ]
      },
      {
        name: "food_id",
        using: "BTREE",
        fields: [
          { name: "food_id" },
        ]
      },
      {
        name: "price_id",
        using: "BTREE",
        fields: [
          { name: "price_id" },
        ]
      },
    ]
  });
};
