'use strict'

const Ws = use('Ws')

const PostHook = (exports = module.exports = {})

PostHook.sendWs = async (postInstance) => {
  const topic = Ws.getChannelç('posts').topic('posts')
  if (topic) {
    topic.broadcast('new', postInstance)
  }
}
