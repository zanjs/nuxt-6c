import Cookie from 'js-cookie'

export default {
  setToken (token) {
    Cookie.set('token', token, { expires: 2 })
  },
  getCookieStr (cookieName, stringCookie) {
    let regexCookie = new RegExp('' + cookieName + '[^;]+').exec(stringCookie)
    let strCookie = regexCookie ? regexCookie[0] : null
    return strCookie ? unescape(strCookie ? strCookie.toString().replace(/^[^=]+./, '') : '') : null
  }
}
