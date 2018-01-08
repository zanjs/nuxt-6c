import Cookie from '../tools/cookie'

export default function ({isServer, res, query}) {
  const token = query.token
  if (token) {
    if (isServer) {
      res.setHeader('Set-Cookie', [`token=${token}`]) // Server-side
    } else {
      // document.cookie = `access_token=${token}` // Client-side
      Cookie.setToken(token)
    }
  }
  // VueCookie.set('test', 'Hello world!', 1)
  // console.log(context.req.headers)
  // context.req.headers.cookie = 'sss=niu'
  // context.VersionServe = 'Julian-v1.0'
  // context.userAgent = context.isServer ? context.req.headers['user-agent'] : navigator.userAgent
}
