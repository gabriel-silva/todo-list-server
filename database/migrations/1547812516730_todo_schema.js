'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TodoSchema extends Schema {
  up() {
    this.create('todos', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .string('title', 50)
        .notNullable()
      table
        .string('content', 250)
        .notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('todos')
  }
}

module.exports = TodoSchema;
