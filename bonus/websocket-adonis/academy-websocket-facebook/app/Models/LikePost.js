'use strict'

const Model = use('Model')

class LikePost extends Model {
  static boot() {
    super.boot()
    this.addHook('afterCreate', 'LikePostHook.sendWs')
    this.addHook('afterDelete', 'LikePostHook.sendWs')
  }

  post() {
    return this.belongsTo('App/Models/Post')
  }

  user() {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = LikePost
