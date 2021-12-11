'use strict'

const Mail = use('Mail')

class InvitationEmail {
  static get concurrency() {
    return 1
  }

  static get key() {
    return 'InvitationEmail-job'
  }

  async handle({ user, team, email }) {
    await Mail.send(
      ['emails.invitation'],
      { team: team.name, user: user.name },
      (message) => {
        message
          .to(email)
          .from('rayan@omnistack.com.br', 'Rayan | Omnistack')
          .subject(`Invitation to join the team ${team.name}`)
      }
    )
  }
}

module.exports = InvitationEmail
