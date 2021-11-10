'use strict'

class Appointment {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      title: 'required',
      location: 'required',
      date: 'required|date'
    }
  }
}

module.exports = Appointment
