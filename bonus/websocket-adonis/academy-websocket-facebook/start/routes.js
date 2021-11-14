'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/users', 'UserController.store')
Route.post('/sessions', 'SessionController.store')

Route.group(() => {
  Route.resource('posts', 'PostController').only(['index', 'store'])
  Route.resource('posts.likes', 'LikePostController').only(['store'])
  Route.resource('posts.comments', 'CommentController').only(['store'])
  Route.resource('posts.comments.likes', 'LikeCommentController').only([
    'store'
  ])
}).middleware('auth')
