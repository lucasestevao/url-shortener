const mongoose = require('mongoose')

const { Schema } = mongoose

const UrlShortenerModel = new Schema({
  urlCode: { type: String, required: true },
  originalUrl: { type: String, required: true },
  shortenedUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  updatedAt: { type: Date, default: Date.now, required: true }
})

module.exports = mongoose.model('UrlShortenerModel', UrlShortenerModel)
