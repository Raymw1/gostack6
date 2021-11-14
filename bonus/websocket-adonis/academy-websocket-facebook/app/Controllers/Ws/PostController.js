'use strict'

class PostController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }
}

module.exports = PostController
