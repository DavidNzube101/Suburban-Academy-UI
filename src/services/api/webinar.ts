import axios from 'axios'
import type { Webinar, WebinarRegistration } from '../../types/webinar'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const webinarApi = {
  getWebinars() {
    return api.get<Webinar[]>('/webinars')
  },

  getWebinarById(id: string) {
    return api.get<Webinar>(`/webinars/${id}`)
  },

  registerForWebinar(webinarId: string, userData: any) {
    return api.post<WebinarRegistration>(`/webinars/${webinarId}/register`, userData)
  }
}