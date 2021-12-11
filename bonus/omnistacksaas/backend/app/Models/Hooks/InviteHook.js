'use strict'

const User = use('App/Models/User')

const InviteHook = (exports = module.exports = {})

InviteHook.sendInvitationEmail = async (invite) => {
  const { email, team_id } = invite
  const invited = await User.findBy('email', email)
  if (invited) {
    await invited.teams().attach(team_id)
  } else {
    console.log('CREATE ACCOUNT')
  }
}
