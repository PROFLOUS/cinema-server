const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Rank = db.define(
    "Rank",
    {
        id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
        },
        nameRank: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        point: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        desc: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = Rank;


