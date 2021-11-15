'use strict'

const Ws = use('Ws')
const Like = use('App/Models/LikePost')

const LikePostHook = (exports = module.exports = {})

LikePostHook.sendWs = async (likeInstance) => {
  const topic = Ws.getChannel('posts').topic('posts')
  if (topic) {
    const [{ count }] = await Like.query()
      .where('post_id', likeInstance.post_id)
      .count()
    topic.broadcast('likes', { count, id: likeInstance.post_id })
  }
}
