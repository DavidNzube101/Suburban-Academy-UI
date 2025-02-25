export interface Webinar {
    id: string
    title: string
    description: string
    startTime: string
    endTime: string
    isLive: boolean
    thumbnailUrl: string
    viewerCount: number
    lecturer: {
      id: string
      name: string
      avatar: string
    }
    goals: string[]
  }
  
  export interface WebinarRegistration {
    id: string
    webinarId: string
    userId: string
    status: 'pending' | 'confirmed' | 'cancelled'
    registeredAt: string
  }