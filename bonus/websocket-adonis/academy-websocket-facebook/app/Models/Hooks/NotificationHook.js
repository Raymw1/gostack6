'use strict'

const Ws = use('Ws')

const NotificationHook = (exports = module.exports = {})

NotificationHook.sendWs = async (notificationInstance) => {
  const topic = Ws.getChannel('notification:*').topic(
    `notification:${notificationInstance.user_id}`
  )
  topic && topic.broadcast('message', notificationInstance)
}
