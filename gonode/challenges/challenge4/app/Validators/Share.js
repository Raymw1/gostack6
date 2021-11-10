'use strict'

class Share {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      email: 'required|email'
    }
  }
}

module.exports = Share
