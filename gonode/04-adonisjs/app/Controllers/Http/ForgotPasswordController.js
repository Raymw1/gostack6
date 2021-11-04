'use strict'

const crypto = require('crypto')
const User = use('App/Models/User')

class ForgotPasswordController {
  async store({ request, response }) {
    try {
      const email = request.input('email') // Only 1 request field
      const user = await User.findByOrFail('email', email)
      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()
      await user.save()
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
