'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article.belongsTo(models.User, { foreignKey: 'authorId' })
      Article.belongsTo(models.Category, { foreignKey: 'categoryId' })
      Article.belongsToMany(models.Customer, { through: models.Favorite, foreignKey: "ArticleId", otherKey: "CustomerId" })
    }
  }
  Article.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        notNull: {
          msg: 'Title must be insert!'
        },
        notEmpty: {
          msg: 'Title must be insert!'
        }
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validation: {
        notNull: {
          msg: 'Title must be insert!'
        },
        notEmpty: {
          msg: 'Title must be insert!'
        }
      }
    },
    imgUrl: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    status: {
      type: DataTypes.STRING,
      defaultValue: "Active"
    }
  }, {
    sequelize,
    modelName: 'Article',
  });

  return Article;
};

