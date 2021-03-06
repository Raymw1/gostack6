'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Appointment = use('App/Models/Appointment')
const Kue = use('Kue')
const Job = use('App/Jobs/ShareAppointmentMail')
const moment = require('moment')

/**
 * Resourceful controller for interacting with appointments
 */
class AppointmentController {
  /**
   * Show a list of all appointments.
   * GET appointments
   */
  async index({ params, request, response, auth }) {
    const appointments = await Appointment.query('user_id', auth.user.id)
      .where('user_id', auth.user.id)
      .orderBy('date')
      .with('user')
      .fetch()
    return appointments
  }

  /**
   * Create/save a new appointment.
   * POST appointments
   */
  async store({ request, response, auth }) {
    const data = request.only(['title', 'location', 'date'])
    let appointment = await Appointment.query()
      .where('user_id', auth.user.id)
      .andWhere('date', data.date)
      .fetch()
    if (appointment.rows.length > 0)
      return response.status(400).send({
        error: { message: 'There is already an appointment at this time' }
      })
    appointment = await Appointment.create({
      ...data,
      user_id: auth.user.id
    })
    return appointment
  }

  /**
   * Display a single appointment.
   * GET appointments/:id
   */
  async show({ params, response, auth }) {
    const appointment = await Appointment.findOrFail(params.id)
    if (appointment.user_id !== auth.user.id)
      return response
        .status(401)
        .send({ error: { message: 'Permission Denied!' } })
    await appointment.load('user')
    return appointment
  }

  /**
   * Update appointment details.
   * PUT or PATCH appointments/:id
   */
  async update({ params, request, response, auth }) {
    const appointment = await Appointment.findOrFail(params.id)
    if (appointment.user_id !== auth.user.id)
      return response
        .status(401)
        .send({ error: { message: 'Permission Denied!' } })
    if (moment().isAfter(appointment.date))
      return response
        .status(401)
        .send({ error: { message: 'Appointment already happened!' } })
    const data = request.only(['title', 'location', 'date'])
    appointment.merge(data)
    await appointment.save()
    return appointment
  }

  /**
   * Delete a appointment with id.
   * DELETE appointments/:id
   */
  async destroy({ params, response, auth }) {
    const appointment = await Appointment.findOrFail(params.id)
    if (appointment.user_id !== auth.user.id)
      return response
        .status(401)
        .send({ error: { message: 'Permission Denied!' } })
    if (moment().isAfter(appointment.date))
      return response
        .status(401)
        .send({ error: { message: 'Appointment already happened!' } })
    await appointment.delete()
  }

  /**
   * Share a appointment with id.
   * SHARE share/:id
   */
  async share({ params, request, response, auth }) {
    try {
      const email = request.input('email')
      const appointment = await Appointment.findOrFail(params.id)
      Kue.dispatch(
        Job.key,
        {
          email,
          organizer: auth.user.username,
          title: appointment.title,
          location: appointment.location,
          date: moment(appointment.date).format('LLL')
        },
        { attempts: 3 }
      )
    } catch (err) {
      return response.status(err.status).send({
        error: {
          message: 'Something went wrong! Does this appointment really exists?'
        }
      })
    }
  }
}

module.exports = AppointmentController
