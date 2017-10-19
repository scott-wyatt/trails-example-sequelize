'use strict'

const Model = require('trails/model')
const shortId = require('shortid')

/**
 * @module Group
 * @description Group Model
 */
module.exports = class Group extends Model {

  static config(app, Sequelize) {
    return {
      options: {
        underscored: true,
        hooks: {
          beforeCreate: function (values, options, fn) {
            // If not token was already created, create it
            if (!values.token) {
              values.token = `group_${shortId.generate()}`
            }
            fn(null, values)
          }
        },
        classMethods: {
          //If you need associations, put them here
          associate: (models) => {
            //More information about associations here : http://docs.sequelizejs.com/en/latest/docs/associations/
            models.Group.belongsToMany(models.User, {
              as: 'users',
              through: {
                model: 'GroupUser',
                unique: true
              },
              foreignKey: 'group_id'
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
      // name
      name: {
        type: Sequelize.STRING,
        unique: true
      }
    }
  }
}
