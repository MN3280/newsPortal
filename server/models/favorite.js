'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Favorite.belongsTo(models.Article, { foreignKey: 'ArticleId' })
      Favorite.belongsTo(models.Customer, { foreignKey: 'CustomerId' })
    }
  }
  Favorite.init({
    CustomerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Customer must be insert!"
        },
        notNull: {
          msg: "Customer must be insert!"
        }
      }
    },
    ArticleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Article must be insert!"
        },
        notNull: {
          msg: "Article must be insert!"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};