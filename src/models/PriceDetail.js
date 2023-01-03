const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PriceDetail', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "Primary Key"
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      comment: "Price"
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Quantity"
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Note"
    },
    priceList_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Price List Id",
      references: {
        model: 'PriceList',
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
    cinemaHallSeat_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Cinema Hall Seat Id",
      references: {
        model: 'CinemaHallSeat',
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
    tableName: 'PriceDetail',
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
        name: "priceList_id",
        using: "BTREE",
        fields: [
          { name: "priceList_id" },
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
        name: "cinemaHallSeat_id",
        using: "BTREE",
        fields: [
          { name: "cinemaHallSeat_id" },
        ]
      },
    ]
  });
};
