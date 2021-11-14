'use strict'

const Schema = use('Schema')

class NotificationSchema extends Schema {
  up () {
    this.create('notifications', table => {
      table.increments()
      table.timestamps()
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.string('content').notNullable()
    })
  }

  down () {
    this.drop('notifications')
  }
}

module.exports = NotificationSchema
