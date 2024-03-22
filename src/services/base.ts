import store from '@/store'
import axios from 'axios'

const base = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

base.interceptors.request.use(
  config => {
    const token = store.state.auth.token
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`
      }
    }
    return config
  },
  error => Promise.reject(error)
)

base.interceptors.response.use(
  res => res,
  async err => {
    if (err.response.status === 401) {
    }
    return Promise.reject(err)
  }
)

export default base
