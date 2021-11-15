'use strict'

class NotificationController {
  constructor({ socket, request, auth }) {
    this.socket = socket
    this.request = request
    const [, id] = this.socket.topic.split(':')
    if (Number(id) !== auth.user.id) {
      this.socket.close()
    }
  }
}

module.exports = NotificationController
