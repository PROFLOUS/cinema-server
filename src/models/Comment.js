const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Comment', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "Primary Key"
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Content"
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
    tableName: 'Comment',
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
          { name: "movie_id" },
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
