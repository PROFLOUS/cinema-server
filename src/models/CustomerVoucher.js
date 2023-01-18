const { DataTypes } = require("sequelize");
const db = require("../config/database");
const Customer = require("./Customer");
const PromotionLine = require("./PromotionLine");

const CustomerVoucher = db.define(
  "CustomerVoucher",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    dateUsed: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    idCustomer: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    idVoucher: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

CustomerVoucher.belongsTo(Customer, { foreignKey: "idCustomer" });
Customer.hasMany(CustomerVoucher, { foreignKey: "idCustomer" });

CustomerVoucher.belongsTo(PromotionLine, { foreignKey: "idVoucher" });
PromotionLine.hasMany(CustomerVoucher, { foreignKey: "idVoucher" });

module.exports = CustomerVoucher;
