'use strict'

const Antl = use('Antl')

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

  get messages() {
    return Antl.list('validation')
  }
}

module.exports = UserUpdate
