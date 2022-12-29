const {Sequelize, DataTypes} = require("sequelize");
const db = require('../config/database');

const City = db.define('City', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

db.sync();

City.sync({ force: false }).then(() => {
    console.log('City table created');
});





module.exports = City;
