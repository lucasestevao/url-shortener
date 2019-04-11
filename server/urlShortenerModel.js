const mongoose = require('mongoose')

const { Schema } = mongoose

const urlShortenerSchema = new Schema({
  urlCode: String,
  originalUrl: String,
  shortenedUrl: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

mongoose.model('urlShortenerModel', urlShortenerSchema)
