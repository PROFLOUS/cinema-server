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
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "Password"
    },
    salt: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Salt"
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
    brithday: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "Brithday"
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Address"
    },
    phoneOtp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Phone Otp"
    },
    otpTime : {
      type: DataTypes.DATE,
      allowNull: true,
    },
    ward_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Ward Id",
      references: {
        model: 'Ward',
        key: 'id'
      }
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
      {
        name: "FK_Customer_Ward",
        using: "BTREE",
        fields: [
          { name: "ward_id" },
        ]
      },
    ]
  });
};
