const urlShortenerModel = require('./urlShortenerModel')

describe('URL Shortener Model', () => {
  let model

  beforeAll(() => {
    model = new urlShortenerModel()
  })

  it('model exists', () => {
    expect(model).toBeDefined()
  })

  it('model should fail if empty', done => {
    model.validate(async err => {
      expect(err.errors).toBeDefined()
      done()
    })
  })
})

describe('URL Shortener Model with values', () => {
  let model

  beforeAll(() => {
    model = new urlShortenerModel({
      urlCode: 'abcdefg',
      originalUrl: 'http://google.com',
      shortenedUrl: 'http://localhost:3000/abcdefg',
      createdAt: new Date(),
      updatedAt: new Date()
    })
  })

  it('model should not trigger errors of related to null attributes', done => {
    model.validate(async err => {
      expect(err).toBeFalsy()
      done()
    })
  })
})
