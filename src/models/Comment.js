const { DataTypes } = require("sequelize");
const db = require("../config/database");
const Customer = require("../models/Customer");
const Movie = require("../models/Movie");

const Comment = db.define(
    "Comment",
    {
        id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
        },
        content: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        idCustomer: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        idMovie: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
);

Comment.belongsTo(Customer, { foreignKey: "idCustomer" });
Customer.hasMany(Comment, { foreignKey: "idCustomer" });

Comment.belongsTo(Movie, { foreignKey: "idMovie" });
Movie.hasMany(Comment, { foreignKey: "idMovie" });

module.exports = Comment;