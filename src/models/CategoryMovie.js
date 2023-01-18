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

module.exports = CategoryMovie;