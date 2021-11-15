'use strict'

const Model = use('Model')

class Notification extends Model {
  static boot() {
    super.boot()
    this.addHook('afterCreate', 'NotificationHook.sendWs')
  }

  user() {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Notification
