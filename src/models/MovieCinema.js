const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MovieCinema', {
    Cinema_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Cinema',
        key: 'id'
      }
    },
    Movie_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Movie',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MovieCinema',
    timestamps: false,
    indexes: [
      {
        name: "fk_MovieCinema_Cinema1_idx",
        using: "BTREE",
        fields: [
          { name: "Cinema_id" },
        ]
      },
      {
        name: "fk_MovieCinema_Movie1_idx",
        using: "BTREE",
        fields: [
          { name: "Movie_id" },
        ]
      },
    ]
  });
};
