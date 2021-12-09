"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Project extends Model {
  users() {
    this.belongsToMany("App/Models/User").pivotModel("App/Models/UserTeam");
  }
}

module.exports = Project;
