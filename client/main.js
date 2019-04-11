function urlShortener() {
  const input = document.getElementById('urlInput')
  const button = document.getElementById('urlButton')
  const link = document.getElementById('urlLink')
  const message = document.getElementById('urlMessage')

  const urlUltimateRegex =/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/

  button.addEventListener('click', () => {
    const originalUrl = input.value
    message.innerText = ''

    if (!urlUltimateRegex.test(originalUrl)) {
      message.innerText = 'Please, insert a valid URL'

      return false
    }

    axios
      .post('/shortener', { originalUrl: originalUrl })
      .then(response => {
        link.href = response.data.shortenedUrl
        link.innerText = response.data.shortenedUrl
      })
      .catch(error => {
        console.log(error)
      })
  })
}

urlShortener()
