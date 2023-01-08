const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CinemaHallSeat', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "Primary Key"
    },
    seat_row: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Row"
    },
    seat_column: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Column"
    },
    type: {
      type: DataTypes.ENUM('PRIMEUM','NORMAL'),
      allowNull: true,
      comment: "PRIME or NORMAL"
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Status"
    },
    cinemaHall_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Cinema Hall Id",
      references: {
        model: 'CinemaHall',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'CinemaHallSeat',
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
        name: "cinemaHall_id",
        using: "BTREE",
        fields: [
          { name: "cinemaHall_id" },
        ]
      },
    ]
  });
};
