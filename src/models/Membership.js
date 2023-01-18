const { DataTypes } = require("sequelize");
const db = require("../config/database");
const Customer = require("../models/Customer");
const Rank = require("../models/Rank");


const MemberShip = db.define(
    "MemberShip",
    {
        id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
        },
        pointHightest: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        currentPoint: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        desc: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        idCustomer: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        idRank: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

MemberShip.belongsTo(Customer, { foreignKey: "idCustomer" });
Customer.hasOne(MemberShip);

MemberShip.belongsTo(Rank, { foreignKey: "idRank" });
Rank.hasMany(MemberShip, { foreignKey: "idRank" });


module.exports = MemberShip;

