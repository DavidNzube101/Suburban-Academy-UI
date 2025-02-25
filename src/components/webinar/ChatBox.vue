<template>
    <div class="flex h-[600px] flex-col rounded-xl border border-gray-200 bg-white">
      <div class="border-b border-gray-200 p-4">
        <h3 class="font-semibold">Live Chat</h3>
      </div>
  
      <div 
        ref="messagesContainer"
        class="flex-1 space-y-4 overflow-y-auto p-4"
      >
        <div 
          v-for="message in messages" 
          :key="message.id"
          class="flex gap-3"
        >
          <img 
            :src="message.user.avatar" 
            :alt="message.user.name"
            class="h-8 w-8 rounded-full"
          >
          <div>
            <div class="flex items-center gap-2">
              <span class="text-sm font-medium">{{ message.user.name }}</span>
              <span class="text-xs text-gray-500">
                {{ formatTime(message.timestamp) }}
              </span>
            </div>
            <p class="text-sm text-gray-600">{{ message.content }}</p>
          </div>
        </div>
      </div>
  
      <div class="border-t border-gray-200 p-4">
        <form @submit.prevent="sendMessage" class="flex gap-2">
          <input 
            v-model="newMessage"
            type="text"
            placeholder="Type your message..."
            class="flex-1 rounded-lg border border-gray-200 px-4 py-2 text-sm focus:border-red-500 focus:outline-none"
          >
          <button 
            type="submit"
            class="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
            :disabled="!newMessage.trim()"
          >
            <Send class="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted, nextTick } from 'vue'
  import { Send } from 'lucide-vue-next'
  import { WebSocketService } from '../../services/websocket'
  
  const props = defineProps<{
    webinarId: string
  }>()
  
  const messages = ref<any[]>([])
  const newMessage = ref('')
  const messagesContainer = ref<HTMLElement | null>(null)
  const ws = new WebSocketService(`${import.meta.env.VITE_WEBSOCKET_URL}/webinar/${props.webinarId}`)
  
  onMounted(() => {
    const socket = ws.connect()
    
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data)
      messages.value.push(message)
      scrollToBottom()
    }
  })
  
  onUnmounted(() => {
    ws.close()
  })
  
  const sendMessage = () => {
    if (!newMessage.value.trim()) return
  
    ws.send({
      type: 'message',
      content: newMessage.value,
      webinarId: props.webinarId
    })
  
    newMessage.value = ''
  }
  
  const scrollToBottom = async () => {
    await nextTick()
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  }
  
  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }
  </script>