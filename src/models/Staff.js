const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Staff', {
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
      type: DataTypes.STRING(50),
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
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "Start Date"
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Status"
    },
    position: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Position"
    },
    manager_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "Manager Id",
      references: {
        model: 'Staff',
        key: 'id'
      }
    },
    cinema_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Cinema Id",
      references: {
        model: 'Cinema',
        key: 'id'
      }
    },
    HierarchyAddressCity_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    HierarchyAddressDistris_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    HierarchyAddressWard_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Staff',
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
        name: "manager_id",
        using: "BTREE",
        fields: [
          { name: "manager_id" },
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
