const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Customer', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "Primary Key"
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Email"
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false,
      comment: "Password"
    },
    isActivated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: "Is Activated"
    },
    phone: {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "Phone Number"
    },
    firstName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "First Name"
    },
    lastName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "Last Name"
    },
    gender: {
      type: DataTypes.STRING(1),
      allowNull: false,
      comment: "Gender"
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Address"
    },
    HierarchyAddressDistrict_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    HierarchyAddressWard_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    HierarchyAddressCity_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    salt: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    brithday: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Customer',
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
    ]
  });
};
