// import Cookie from '../tools/cookie'
import VueCookie from 'vue-cookie'

export default function ({isServer, res, query}) {
  const token = query.token
  if (token) {
    if (isServer) {
      res.setHeader('Set-Cookie', [`access_token=${token}`]) // Server-side
    } else {
      // document.cookie = `access_token=${token}` // Client-side
      VueCookie.set('access_token', token, 1)
    }
  }
  // VueCookie.set('test', 'Hello world!', 1)
  // console.log(context.req.headers)
  // context.req.headers.cookie = 'sss=niu'
  // console.log('context.req.headers')
  // console.log(context.req.headers)
  // context.VersionServe = 'Julian-v1.0'
  // context.userAgent = context.isServer ? context.req.headers['user-agent'] : navigator.userAgent
}
