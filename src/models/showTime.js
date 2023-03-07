const { DataTypes } = require("sequelize");
const db = require("../config/database");

const ShowTime = db.define(
    "ShowTime",
    {
        id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
        },
        showTime: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },

    },
    {
        freezeTableName: true,
        timestamps: true,
    }
);

module.exports = ShowTime;