const { DataTypes } = require("sequelize");
const db = require("../config/database");
const Staff = require("../models/Staff");

const Role = db.define(
    "Role",
    {
        id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
        },
        nameRole: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        staff_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

Role.belongsTo(Staff, { foreignKey: "staff_id" });
Staff.hasMany(Role, { foreignKey: "staff_id" });

module.exports = Role;

