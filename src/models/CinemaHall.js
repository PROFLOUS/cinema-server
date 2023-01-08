const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CinemaHall', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "Primary Key"
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Name"
    },
    totalSeats: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Total Seats"
    },
    type: {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "Type_2D or Type_3D"
    },
    cinema_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Cinema Id",
      references: {
        model: 'Cinema',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'CinemaHall',
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
        name: "cinema_id",
        using: "BTREE",
        fields: [
          { name: "cinema_id" },
        ]
      },
    ]
  });
};
