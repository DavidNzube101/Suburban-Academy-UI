<template>
    <div class="relative aspect-video w-full bg-gray-900">
      <!-- Video Player Container -->
      <div v-if="streamReady" class="h-full w-full">
        <video
          ref="videoRef"
          class="h-full w-full"
          controls
          autoplay
        >
          <source :src="streamUrl" type="application/x-mpegURL">
          Your browser does not support the video tag.
        </video>
      </div>
  
      <!-- Loading State -->
      <div 
        v-else
        class="flex h-full w-full items-center justify-center"
      >
        <div class="text-center">
          <Loader2 class="mx-auto h-8 w-8 animate-spin text-red-500" />
          <p class="mt-2 text-sm text-gray-400">Connecting to stream...</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { Loader2 } from 'lucide-vue-next'
  
  const props = defineProps<{
    webinarId: string
  }>()
  
  const videoRef = ref<HTMLVideoElement | null>(null)
  const streamReady = ref(false)
  const streamUrl = ref('')
  
  onMounted(async () => {
    try {
      // In a real application, you would fetch the stream URL from your API
      // For demo purposes, we'll simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      streamUrl.value = `https://stream.example.com/live/${props.webinarId}/index.m3u8`
      streamReady.value = true
    } catch (error) {
      console.error('Failed to initialize stream:', error)
    }
  })
  </script>