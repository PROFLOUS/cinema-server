const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PromotionFlashSale', {
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
    maxQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Max Quantity"
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
    price_sale: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      comment: "Price Sale"
    },
    show_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Show Id",
      references: {
        model: 'Movie',
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
    tableName: 'PromotionFlashSale',
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
        name: "movie_id",
        using: "BTREE",
        fields: [
          { name: "show_id" },
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
