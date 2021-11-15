'use strict'

const Ws = use('Ws')

const PostHook = (exports = module.exports = {})

PostHook.sendWs = async (postInstance) => {
  const topic = Ws.getChannel('posts').topic('posts')
  if (topic) {
    await postInstance.loadMany(['user', 'comments'])
    topic.broadcast('new', postInstance)
  }
}
