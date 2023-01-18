const { DataTypes } = require("sequelize");
const db = require("../config/database");
const Product = require("../models/Product");
const Ticket = require("../models/Ticket");

const ProductTicket = db.define(
  "ProductTicket",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    productCode: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idProduct: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    idTicket: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

ProductTicket.belongsTo(Product, { foreignKey: "idProduct" });
Product.hasMany(ProductTicket, { foreignKey: "idProduct" });

ProductTicket.belongsTo(Ticket, { foreignKey: "idTicket" });
Ticket.hasMany(ProductTicket, { foreignKey: "idTicket" });

module.exports = ProductTicket;
