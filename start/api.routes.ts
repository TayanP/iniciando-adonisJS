//rotas de api
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {

  Route.get('/admin/', 'PainelController.admin')


  Route.group(() => {
    Route.get('/', 'PainelController.index')

    //armazenar documentos,
    Route.get('/docs/*', 'PainelController.docs')

    //Passando e validando parametros, ? é parametros opcionais
    Route.get('/usuarios/:id?', 'PainelController.usuarioById')
    //a rota tem que ser um numero
    .where('id', Route.matchers.number())
    Route.get('/usuarios/:slug', 'PainelController.usuarioBySlug')
    .where('slug', Route.matchers.slug())
  }).prefix('/painel')

}).prefix('/api')


