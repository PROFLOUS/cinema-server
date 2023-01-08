const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Ticket', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "Primary Key"
    },
    numberOfSeat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Number Of Seat"
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Status"
    },
    form: {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "Form"
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
    show_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Show Id",
      references: {
        model: 'Shows',
        key: 'id'
      }
    },
    customer_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Customer Id",
      references: {
        model: 'Customer',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Ticket',
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
        name: "show_id",
        using: "BTREE",
        fields: [
          { name: "show_id" },
        ]
      },
      {
        name: "customer_id",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
    ]
  });
};
