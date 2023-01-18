const { DataTypes } = require("sequelize");
const db = require("../config/database");
const Show = require("../models/Show");
const Customer = require("../models/Customer");
const Staff = require("../models/Staff");

const Ticket = db.define(
  "Ticket",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    numberOfseat: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    form: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    idShow: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    idCustomer: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    idStaff: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

Ticket.belongsTo(Show, { foreignKey: "idShow" });
Show.hasMany(Ticket, { foreignKey: "idShow" });

Ticket.belongsTo(Customer, { foreignKey: "idCustomer" });
Customer.hasMany(Ticket, { foreignKey: "idCustomer" });

Ticket.belongsTo(Staff, { foreignKey: "idStaff" });
Staff.hasMany(Ticket, { foreignKey: "idStaff" });

module.exports = Ticket;
