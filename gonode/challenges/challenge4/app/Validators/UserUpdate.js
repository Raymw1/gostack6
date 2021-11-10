'use strict'

class UserUpdate {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      username: 'required',
      email: 'required|email',
      oldPassword: 'required',
      password: 'required|confirmed'
    }
  }
}

module.exports = UserUpdate
