'use strict'

const Like = use('App/Models/LikePost')

class LikePostController {
  async store ({ params, request, auth }) {
    try {
      const like = await Like.findByOrFail({
        post_id: params.posts_id,
        user_id: auth.user.id
      })
      await like.delete()
    } catch (err) {
      await Like.create({
        post_id: params.posts_id,
        user_id: auth.user.id
      })
    }
    const [{ count }] = await Like.query()
      .where('post_id', params.posts_id)
      .count()

    return { count, id: params.posts_id }
  }
}

module.exports = LikePostController
