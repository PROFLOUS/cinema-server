const { DataTypes } = require("sequelize");
const db = require("../config/database");

const CategoryMovie = db.define(
    "CategoryMovie",
    {
        id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
        },
        nameCategory: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        title:{
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        desc: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = CategoryMovie;