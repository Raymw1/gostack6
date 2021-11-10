'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AppointmentSchema extends Schema {
  up() {
    this.create('appointments', (table) => {
      table.increments()
      table.string('title')
      table.string('location')
      table.timestamp('date')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.timestamps()
    })
  }

  down() {
    this.drop('appointments')
  }
}

module.exports = AppointmentSchema
