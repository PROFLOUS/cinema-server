const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Rank_Member', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "Primary Key"
    },
    nameRank: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Name Rank"
    },
    point: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Point"
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Description"
    },
    membership_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Membership Id",
      references: {
        model: 'Membership',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Rank_Member',
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
        name: "membership_id",
        using: "BTREE",
        fields: [
          { name: "membership_id" },
        ]
      },
    ]
  });
};
