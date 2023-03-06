const { DataTypes } = require("sequelize");
const db = require("../config/database");
const Product = require("./Product");

const ItemComboLine = db.define(
  "ItemComboLine",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    comboId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    productId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }

  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

ItemComboLine.belongsTo(Product, { foreignKey: "productId" });
Product.hasMany(ItemComboLine, { foreignKey: "productId" });



module.exports = ItemComboLine;
