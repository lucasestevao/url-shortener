const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const connectOptions = {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useNewUrlParser: true
}

mongoose.connect(
  'mongodb://localhost/url-shortener',
  connectOptions,
  (err, db) => {
    if (err) console.log(`MongoDB Error`, er)

    console.log(`Connected to MongoDB`)
  }
)

require('./urlShortenerModel')

const app = express()

app.use(bodyParser.json())
app.use('/', express.static('client'))

require('./UrlShortenerRouter')(app)

app.listen(3000, () => console.log('URL Shortener app listening on port 3000!'))
