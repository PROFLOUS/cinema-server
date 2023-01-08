const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Shows', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "Primary Key"
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "Start Date"
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "End Date"
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Status"
    },
    movie_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Movie Id",
      references: {
        model: 'Movie',
        key: 'id'
      }
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
    tableName: 'Shows',
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
        name: "movie_id",
        using: "BTREE",
        fields: [
          { name: "movie_id" },
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
