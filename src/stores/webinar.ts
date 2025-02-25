
import type { Webinar } from '../types/webinar'
import { webinarApi } from '../services/api/webinar'
import { defineStore } from 'pinia'

interface WebinarState {
  webinars: Webinar[]
  currentWebinar: Webinar | null
  loading: boolean
  error: string | null
}

export const useWebinarStore = defineStore('webinar', {
  state: (): WebinarState => ({
    webinars: [],
    currentWebinar: null,
    loading: false,
    error: null
  }),

  actions: {
    async fetchWebinars() {
      this.loading = true
      try {
        const response = await webinarApi.getWebinars()
        this.webinars = response.data
      } catch (error) {
        this.error = 'Failed to fetch webinars'
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    async fetchWebinarById(id: string) {
      this.loading = true
      try {
        const response = await webinarApi.getWebinarById(id)
        this.currentWebinar = response.data
      } catch (error) {
        this.error = 'Failed to fetch webinar details'
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    async registerForWebinar(webinarId: string, userData: any) {
      try {
        await webinarApi.registerForWebinar(webinarId, userData)
        // Handle success (e.g., show notification)
      } catch (error) {
        this.error = 'Failed to register for webinar'
        throw error
      }
    }
  }
})