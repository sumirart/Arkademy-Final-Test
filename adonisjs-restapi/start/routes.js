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

// product route
Route.get('products', 'ProductController.index')
Route.get('product/:id', 'ProductController.show')
Route.post('product', 'ProductController.store')
Route.put('product/:id', 'ProductController.update')
Route.delete('product/:id', 'ProductController.delete')

// order route
Route.get('orders', 'OrderController.index')
// Route.get('order/:id', 'OrderController.show')
Route.post('order', 'OrderController.store')
Route.put('order/:id', 'OrderController.update')
Route.patch('order/:id', 'OrderController.patch')
Route.delete('order/:id', 'OrderController.delete')

// transaction route
Route.post('transaction', 'TransactionController.store')
Route.get('transaction/:id', 'TransactionController.show')