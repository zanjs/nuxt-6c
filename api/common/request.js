import fetch from '../../config/fetch'

export default {
  post (url, data = {}, params = '') {
    return fetch({
      url,
      method: 'POST',
      data,
      params
    })
  }
}
