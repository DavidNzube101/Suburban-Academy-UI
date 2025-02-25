export class WebSocketService {
    private ws: WebSocket | null = null
    private reconnectAttempts = 0
    private maxReconnectAttempts = 5
    private reconnectTimeout = 1000
  
    constructor(private url: string) {}
  
    connect() {
      this.ws = new WebSocket(this.url)
  
      this.ws.onopen = () => {
        console.log('Connected to WebSocket')
        this.reconnectAttempts = 0
      }
  
      this.ws.onclose = () => {
        console.log('Disconnected from WebSocket')
        this.reconnect()
      }
  
      this.ws.onerror = (error) => {
        console.error('WebSocket error:', error)
      }
  
      return this.ws
    }
  
    private reconnect() {
      if (this.reconnectAttempts < this.maxReconnectAttempts) {
        this.reconnectAttempts++
        console.log(`Reconnecting... Attempt ${this.reconnectAttempts}`)
        setTimeout(() => this.connect(), this.reconnectTimeout)
        this.reconnectTimeout *= 2
      }
    }
  
    send(message: any) {
      if (this.ws?.readyState === WebSocket.OPEN) {
        this.ws.send(JSON.stringify(message))
      }
    }
  
    close() {
      if (this.ws) {
        this.ws.close()
      }
    }
  }