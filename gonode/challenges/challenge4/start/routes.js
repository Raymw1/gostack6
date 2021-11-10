'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/users', 'UserController.store').validator('User')
Route.post('/sessions', 'SessionController.store').validator('Session')

Route.group(() => {
  Route.put('/users', 'UserController.update').validator('UserUpdate')
  Route.resource('/appointments', 'AppointmentController')
    .apiOnly()
    .validator('Appointment')
  Route.post('/share/:id', 'AppointmentController.share').validator('Share')
}).middleware(['auth'])
