'use strict'

const Database = use('Database')
const User = use('App/Models/User')

class UserController {
  async store({ request }) {
    // const data = request.all()
    const data = request.only(['username', 'email', 'password'])
    const addresses = request.input('addresses')
    const trx = await Database.beginTransaction()
    const user = await User.create(data, trx)
    await user.addresses().createMany(addresses, trx)
    await trx.commit() // FINALLY SAVE
    return user
  }
}

module.exports = UserController
