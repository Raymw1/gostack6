'use strict'

const User = use('App/Models/User')

const Role = use('Adonis/Acl/Role')
const Permission = use('Adonis/Acl/Permission')

class DatabaseSeeder {
  async run() {
    const user = await User.create({
      name: 'Rayan Wilbert',
      email: 'rayan@rocketseat.com.br',
      password: '123456'
    })

    const createInvite = await Permission.create({
      slug: 'invites_create',
      name: 'Invite members'
    })

    const createProject = await Permission.create({
      slug: 'projects_create',
      name: 'Create projects'
    })

    const admin = await Role.create({
      slug: 'administrator',
      name: 'Administrator'
    })

    const moderator = await Role.create({
      slug: 'moderator',
      name: 'Moderator'
    })

    await Role.create({
      slug: 'visitor',
      name: 'Visitor'
    })

    await admin.permissions().attach([createInvite.id, createProject.id])
    await moderator.permissions().attach([createProject.id])

    const team = await user.teams().create({
      name: 'Rocketseat',
      user_id: user.id
    })

    const teamJoin = await user.teamJoins().where('team_id', team.id).first()
    await teamJoin.roles().attach([admin.id])
  }
}

module.exports = DatabaseSeeder
