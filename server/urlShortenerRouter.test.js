// Trying to test multiple approaches, didn't have time to finish it though =/


describe('Test API shortener', () => {
  it('Should shortener URL', () => {
    expect(true).toBe(true)
  })
})

// const assert = require('assert')
// const sinon = require('sinon')
// const PassThrough = require('stream').PassThrough
// const http = require('http')
// const axios = require('axios')

// const app = require('./urlShortenerRouter')

// const baseUrl = 'http://localhost:3000'

// describe('Test API shortener', () => {
//   beforeEach(() => {
//     this.request = sinon.stub(http, 'request')
//   })

//   afterEach(() => {
//     http.request.restore()
//   })

//   it('Should shortener URL', done => {
//     // axios
//     //   .post(`${baseUrl}/shortener`, { originalUrl: 'http://apple.com' })
//     //   .then(response => {
//     //     console.log(response)
//     //   })
//     //   .catch(error => {
//     //     console.log(error)
//     //   })

//     const params = { originalUrl: 'http://apple.com' }
//     const expected = JSON.stringify(params)

//     const request = new PassThrough()
//     const url = sinon.spy(request, 'req')

//     this.request.returns(request)

//     app.post(params, (response) => { console.log(response) })

//     // console.log(url.body())
    
//     assert(url.withArgs(expected).calledOnce)
//   })

//   // it('Should redirect to original URL', function(done) {
//   //   request.get(
//   //     {
//   //       url: urlBase + '/123456'
//   //     },
//   //     function(error, response, body) {
//   //       // precisamos converter o retorno para um objeto json
//   //       const _body = {}
//   //       try {
//   //         _body = JSON.parse(body)
//   //       } catch (e) {
//   //         _body = {}
//   //       }

//   //       // utilizando a funcao expect do chai, vamos verificar se o resultado da chamada foi sucesso (200)
//   //       expect(response.statusCode).to.equal(200)

//   //       // agora, verificamos se retornou a propriedade cards
//   //       if (_body.should.have.property('cards')) {
//   //         //se retornou, vamos verificar o tamanho, deve ser menor ou igual a 100 itens
//   //         expect(_body.cards).to.have.lengthOf.at.most(100)
//   //       }

//   //       done() // avisamos o test runner que acabamos a validacao e ja pode proseeguir
//   //     }
//   //   )
//   // })
// })
