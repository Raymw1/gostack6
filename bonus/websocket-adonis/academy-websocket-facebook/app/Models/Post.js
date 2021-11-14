'use strict'

const Model = use('Model')

class Post extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  likes () {
    return this.hasMany('App/Models/LikePost')
  }

  comments () {
    return this.hasMany('App/Models/Comment')
  }

  static scopeWithLikes (query) {
    return query.select('*', function () {
      return this.count('*')
        .from('like_posts')
        .whereRaw('post_id = posts.id')
        .as('likes')
    })
  }
}

module.exports = Post
