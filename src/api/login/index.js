import ajax from '../../lib/axios'

const API = {
  // login
  async loginApi(data) {
    return await ajax.post('/api/user/login', data)
  },
  // sendVerifyCode
  async sendVerifyCodeApi(data) {
    return await ajax.post('/api/user/loginMsgCode', data)
  },
}
export default API
