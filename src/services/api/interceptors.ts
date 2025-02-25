// import axios from 'axios'
import type { AxiosError, AxiosInstance } from 'axios'
import { router } from '../../router'

export function setupInterceptors(api: AxiosInstance) {
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('auth_token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        localStorage.removeItem('auth_token')
        router.push('/login')
      }
      return Promise.reject(error)
    }
  )
}