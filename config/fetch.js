import axios from 'axios'
import env from './env'
import Cookies from 'js-cookie'

export default function fetch (options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: env.BASE_URL,
      timeout: 295000
    })

    // instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

    const token = Cookies.get('token')
    // http request 拦截器
    instance.interceptors.request.use(
      config => {
        config.headers.Authorization = 'Bearer ' + token
        config.data.AppKey = token || '78701677fa28465ca5fb624a51a9dca4'
        console.log(config)
        return config
      },
      err => {
        return Promise.reject(err)
      })

    // http response 拦截器
    instance.interceptors.response.use(
      response => {
        return response
      },
      error => {
        if (error) {
        }
        return Promise.reject(error) // 返回接口返回的错误信息
      })

    // 请求处理
    instance(options)
      .then((res) => {
        // 请求成功时,根据业务判断状态
        /*  if (code === port_code.success) {
         resolve({code, msg, data})
         return false
         } else if (code === port_code.unlogin) {
         setUserInfo(null)
         router.replace({name: "login"})
         } */
        resolve(res.data)
        return false
      })
      .catch((error) => {
        // 请求失败时,根据业务判断状态
        // Notice.error({
        //   title: '出错了！',
        //   desc: '错误原因 ' + JSON.stringify(error),
        //   duration: 0
        // })
        reject(error)
      })
  })
}
