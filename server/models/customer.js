'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.belongsToMany(models.Article, { through: models.Favorite, foreignKey: "CustomerId", otherKey: "ArticleId" })
    }
  }
  Customer.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Email must be insert!"
        },
        notNull: {
          msg: "Email must be insert!"
        },
        isEmail: {
          msg: "Format email tidak valid!"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Password must be insert!"
        },
        notNull: {
          msg: "Password must be insert!"
        }
      }
    },
    role: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Customer',
  });
  Customer.beforeCreate((cust) => {
    cust.password = hashPassword(cust.password)
  })
  return Customer;
};