'use strict'

const Mail = use('Mail')

class ShareAppointmentMail {
  // If this getter isn't provided, it will default to 1.
  // Increase this number to increase processing concurrency.
  static get concurrency() {
    return 1
  }

  // This is required. This is a unique key used to identify this job.
  static get key() {
    return 'ShareAppointmentMail-job'
  }

  // This is where the work is done.
  async handle({ email, organizer, title, location, date }) {
    console.log(`Job: ${ShareAppointmentMail.key}`)
    await Mail.send(
      ['emails.share'],
      {
        organizer,
        title,
        location,
        date
      },
      (message) => {
        message
          .to(email)
          .from('rayan@gonode.com', 'Rayan | GoNode')
          .subject('Appointment Invitation')
      }
    )
  }
}

module.exports = ShareAppointmentMail
