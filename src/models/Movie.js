const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Movie', {
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
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Title"
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Description"
    },
    durationInMins: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Duration"
    },
    releaseDate: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "Release Date"
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Status"
    },
    language: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Language"
    },
    director: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Director"
    },
    cast: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Cast"
    },
    link_trailer: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Trailer"
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Country"
    },
    genre_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Genre Id",
      references: {
        model: 'Genre',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Movie',
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
        name: "genre_id",
        using: "BTREE",
        fields: [
          { name: "genre_id" },
        ]
      },
    ]
  });
};
