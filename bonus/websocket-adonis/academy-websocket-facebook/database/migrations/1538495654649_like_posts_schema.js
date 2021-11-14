'use strict'

const Schema = use('Schema')

class LikePostSchema extends Schema {
  up () {
    this.create('like_posts', table => {
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
      table
        .integer('post_id')
        .unsigned()
        .references('id')
        .inTable('posts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('likes')
  }
}

module.exports = LikePostSchema
