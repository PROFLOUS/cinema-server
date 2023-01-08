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
    CinemaHall_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'CinemaHall',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'PriceDetail',
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
        name: "fk_PriceDetail_CinemaHall1_idx",
        using: "BTREE",
        fields: [
          { name: "CinemaHall_id" },
        ]
      },
    ]
  });
};
