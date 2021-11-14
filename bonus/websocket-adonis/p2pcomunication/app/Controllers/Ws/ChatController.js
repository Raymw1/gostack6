"use strict";

class ChatController {
  constructor({ socket, request }) {
    this.socket = socket;
    this.request = request;
  }

  onMessage(data) {
    this.socket.broadcastToAll("message", data);
  }

  // onClose() {}
  // onError() {}
}

module.exports = ChatController;
