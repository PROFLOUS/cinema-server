const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Cinema = require('../models/Cinema');

const CinemaHall = db.define('CinemaHall', {
    id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING(10),
        allowNull: false,
        comment: "Type_2D or Type_3D"
      },
      cinema_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      }
}, {
    timestamps: true,
    freezeTableName: true,
});

CinemaHall.belongsTo(Cinema, {foreignKey: 'cinema_id'});
Cinema.hasMany(CinemaHall, {foreignKey: 'cinema_id'});

module.exports = CinemaHall;