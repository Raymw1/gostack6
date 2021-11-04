'use strict'

const crypto = require('crypto')
const User = use('App/Models/User')
const Mail = use('Mail')

class ForgotPasswordController {
  async store({ request, response }) {
    try {
      const email = request.input('email') // Only 1 request field
      const user = await User.findByOrFail('email', email)
      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()
      await user.save()
      await Mail.send(
        ['emails.forgot_password'],
        {
          email,
          token: user.token,
          link: `${request.input('redirect_url')}?token=${user.token}`
        },
        (message) => {
          message
            .to(email)
            .from('rayan@gonode.com', 'Rayan | GoNode')
            .subject('Password Recovery')
        }
      )
    } catch (err) {
      return response.status(err.status).send({
        error: {
          message: 'Something went wrong! Does this email really exists?'
        }
      })
    }
  }
}

module.exports = ForgotPasswordController
