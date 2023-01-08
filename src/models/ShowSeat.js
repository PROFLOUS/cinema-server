const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ShowSeat', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "Primary Key"
    },
    seat_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Seat Number"
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
    cinemaSeat_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'CinemaHallSeat',
        key: 'id'
      }
    },
    ticket_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Ticket',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'ShowSeat',
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
        name: "FK_Ticket",
        using: "BTREE",
        fields: [
          { name: "ticket_id" },
        ]
      },
      {
        name: "FK_CinemaSet",
        using: "BTREE",
        fields: [
          { name: "cinemaSeat_id" },
        ]
      },
    ]
  });
};
