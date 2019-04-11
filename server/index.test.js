const mongoose = require('mongoose')
const axios = require('axios')

require('./urlShortenerModel.js')

beforeEach(done => {
  function clearDB() {
    for (let i in mongoose.connection.collections) {
      mongoose.connection.collections[i].deleteMany(() => {})
    }

    return done()
  }

  if (mongoose.connection.readyState === 0) {
    mongoose.connect(
      `mongodb://localhost:27017/url-shortener`,
      { useNewUrlParser: true },
      err => {
        if (err) {
          throw err
        }

        return clearDB()
      }
    )
  } else {
    return clearDB()
  }
})

afterEach(done => {
  mongoose.disconnect()
  return done()
})

afterAll(done => {
  return done()
})

describe('Shortener', () => {
  test('equal urls return identical shortened urls', async () => {
    let shortenedUrl

    axios
      .post('http://localhost:3000/shortener', {
        originalUrl: 'http://teste.com'
      })
      .then(response => {
        shortenedUrl = response.data.shortenedUrl

        axios
          .post('http://localhost:3000/shortener', {
            originalUrl: 'http://teste.com'
          })
          .then(response => {
            expect(shortenedUrl).toEqual(response.data.shortenedUrl)
          })
      })
  })

  test('different urls return different shortened urls', async () => {
    let shortenedUrl

    axios
      .post('http://localhost:3000/shortener', {
        originalUrl: 'http://testea.com'
      })
      .then(response => {
        shortenedUrl = response.data.shortenedUrl

        axios
          .post('http://localhost:3000/shortener', {
            originalUrl: 'http://testeb.com'
          })
          .then(response => {
            expect(shortenedUrl).not.toEqual(response.data.shortenedUrl)
          })
      })
  })

  test('original url is correctly saved', async () => {
    let inputOriginalUrl = 'http://teste.com'

    axios
      .post('http://localhost:3000/shortener', {
        originalUrl: inputOriginalUrl
      })
      .then(response => {
        const { originalUrl } = response.data

        expect(originalUrl).toEqual(inputOriginalUrl)
      })
  })

  /*test('shortened url redirects to original url', async () => {
    axios
      .post('http://localhost:3000/shortener', { originalUrl: 'http://teste.com' })
      .then(response => {
        const { originalUrl, shortenedUrl } = response.data

        axios.get(shortenedUrl).then(response => {
          expect(response).toEqual(originalUrl)
        })
      })
  })*/
})
