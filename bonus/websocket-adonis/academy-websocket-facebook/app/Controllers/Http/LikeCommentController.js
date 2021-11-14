'use strict'

const Like = use('App/Models/LikeComment')

class LikeCommentController {
  async store ({ params, request, auth }) {
    try {
      const like = await Like.findByOrFail({
        comment_id: params.comments_id,
        user_id: auth.user.id
      })
      await like.delete()
    } catch (err) {
      await Like.create({
        comment_id: params.comments_id,
        user_id: auth.user.id
      })
    }

    const [{ count }] = await Like.query()
      .where('comment_id', params.comments_id)
      .count()

    return { count, post_id: params.posts_id, id: params.comments_id }
  }
}

module.exports = LikeCommentController
