'use strict'
const Model = require('trails/model')
const shortId = require('shortid')

/**
 * @module User
 * @description User Model
 */
module.exports = class User extends Model {

  static config(app, Sequelize) {
    return {
      options: {
        underscored: true,
        hooks: {
          beforeCreate: function (values, options, fn) {
            // If not token was already created, create it
            if (!values.token) {
              values.token = `user_${shortId.generate()}`
            }
            fn(null, values)
          }
        },
        classMethods: {
          //If you need associations, put them here
          associate: (models) => {
            //More information about associations here : http://docs.sequelizejs.com/en/latest/docs/associations/
            models.User.belongsToMany(models.Group, {
              as: 'groups',
              through: {
                model: 'GroupUser',
                unique: true
              },
              foreignKey: 'user_id'
            })
          }
        }
      }
    }
  }

  static schema(app, Sequelize) {
    return {
      // Token created on "Before Create" hook
      token: {
        type: Sequelize.STRING,
        unique: true
      },
      // Username
      username: {
        type: Sequelize.STRING,
        unique: true
      },
      // Unique Email address for user
      email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
          isEmail: true
        }
      }
    }
  }
}
