const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Genre', {
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
    tableName: 'Genre',
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
    ]
  });
};
