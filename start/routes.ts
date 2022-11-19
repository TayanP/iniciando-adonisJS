import Route from '@ioc:Adonis/Core/Route'
import './api.routes'

//rota, nome do controller, e o metodo que está direcionando
Route.get('/', 'HomeController.index')
Route.get('/sobre', 'HomeController.sobre')


