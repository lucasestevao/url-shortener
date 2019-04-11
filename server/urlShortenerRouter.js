const mongoose = require('mongoose')

const UrlShortenerModel = mongoose.model('urlShortenerModel')
const shortid = require('shortid')

const baseUrl = 'http://localhost:3000'
const errorUrl = `${baseUrl}/error`

module.exports = app => {
  app.get('/:code', async (req, res) => {
    const urlCode = req.params.code
    const url = await UrlShortenerModel.findOne({ urlCode: urlCode })

    if (url) {
      return res.redirect(url.originalUrl)
    } else {
      return res.redirect(errorUrl)
    }
  })

  app.post('/shortener', async (req, res) => {
    const { originalUrl } = req.body

    const urlCode = shortid.generate()
    const updatedAt = new Date()

    try {
      const url = await UrlShortenerModel.findOne({ originalUrl: originalUrl })

      if (url) {
        res.status(200).json(url)
      } else {
        const shortenedUrl = `${baseUrl}/${urlCode}`

        const url = new UrlShortenerModel({
          urlCode,
          originalUrl,
          shortenedUrl,
          updatedAt
        })

        await url.save()

        res.status(200).json(url)
      }
    } catch (err) {
      res.status(401).json(`Error: ${err}`)
    }
  })
}
