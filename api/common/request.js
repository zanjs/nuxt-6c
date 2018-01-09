import fetch from '../../config/fetch'

export default {
  post (options) {
    options.method = 'POST'
    if (!options.data) {
      options.data = {}
    }
    return fetch(options)
  }
}
