import Cookie from '../tools/cookie'

export default function (context) {
  let token = ''
  if (context.route) {
    token = context.route.query.token
  }
  if (token) {
    context.token = token
    Cookie.setToken(token)
  }
  context.VersionServe = 'Julian-v1.0'
  context.userAgent = context.isServer ? context.req.headers['user-agent'] : navigator.userAgent
}
