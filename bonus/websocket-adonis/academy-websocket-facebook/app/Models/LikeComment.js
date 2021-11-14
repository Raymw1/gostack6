'use strict'

const Model = use('Model')

class LikeComment extends Model {
  comment () {
    return this.belongsTo('App/Models/Comment')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = LikeComment
