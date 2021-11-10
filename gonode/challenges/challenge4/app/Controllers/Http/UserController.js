'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')

class UserController {
  async store({ request }) {
    const data = request.only(['username', 'email', 'password'])
    const user = await User.create(data)
    return user
  }

  async update({ request, response }) {
    try {
      const { email, oldPassword } = request.all()
      // await auth.attempt(email, oldPassword)
      const user = await User.findByOrFail('email', email)
      if (!(await Hash.verify(oldPassword, user.password)))
        return response.status(401).send({ error: 'Invalid password' })
      const data = request.only(['username', 'password'])
      user.merge(data)
      await user.save()
      return user
    } catch (error) {
      return response.status(400).send({ error: error.message })
    }
  }
}

module.exports = UserController
