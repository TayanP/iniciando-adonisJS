// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PainelController {
  protected users = [{
    id: 1,
    'slug': 'tay',
    name: 'Tayan Peres'
  },
 {
  id: 2,
  'slug': 'Tatu',
  name: 'Tutu silva'
  }
  ]
  async index({response }) {
    let json = { hello: 'word'}

    response.redirect().toPath('/api/painel/usuarios/1')
  }

  /* async index({ request, response }) {
      qs = QueryStrings
    response.send ({
      response : 'Index do Painel',
      ip: request.ip(),
      qs: request.qs(),
      url: request.url(),
      completeUrl: request.completeUrl(),
      //pegar todos os inputs
      input: request.all(),
      //pegar apenas um ou mais de um
      only: request.only(['idade', 'nome']),
      //pegar todos menos um em especifico
      except: request.except(['idade'])
    })
  } */


  async usuarioById({params}) {
    // se nao existir o paramatro paramsid
    if(!params['id']) {
      //retorna os usuarios
      return {users: this.users}
    }
    //pegando o parametro que está na rota
    let myRequestedUserId = params['id'];
    //pegando apenas 1 usuario
    // 3 iguais === está checando o tipo e o  valor
    // 2 igual chega apenas o valor
      let myUser = this.users.find(user => user.id == myRequestedUserId)
      //se houver um usuarios, retona ele mesmo
      if(myUser) {
        return myUser
      // se n tiver um usuario, retorna o error.
      } else {
        return {error: 'Nenhum usuário encontrado'}
      }
  }

  async usuarioBySlug({params}) {
    let myRequestedSlug = params['slug'];
      let myUser = this.users.find(user => user.slug == myRequestedSlug )
      if(myUser) {
        return myUser
      } else {
        return {error: 'Nenhum usuário encontrado'}
      }

  }

  async docs({params}) {
    //capturando o params
    return params['*'][0]
  }

  async admin() {
    return 'Admin '
  }
}
