import Cookie from 'js-cookie'

export default {
  setToken (token) {
    Cookie.set('token', token, { expires: 2 })
  }
}
