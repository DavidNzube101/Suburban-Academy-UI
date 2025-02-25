<template>
    <div v-if="currentWebinar" class="grid grid-cols-3 gap-8">
      <div class="col-span-2">
        <div class="mb-6">
          <h1 class="text-2xl font-bold">{{ currentWebinar.title }}</h1>
          <div class="mt-2 flex items-center gap-4">
            <span class="flex items-center gap-2 text-sm text-gray-600">
              <Calendar class="h-4 w-4" />
              {{ formatDate(currentWebinar.startTime) }}
            </span>
            <span class="flex items-center gap-2 text-sm text-gray-600">
              <Clock class="h-4 w-4" />
              {{ formatDuration(currentWebinar.startTime, currentWebinar.endTime) }}
            </span>
          </div>
        </div>
  
        <div class="relative mb-8 overflow-hidden rounded-xl bg-gray-100">
          <WebinarStream 
            v-if="currentWebinar.isLive"
            :webinar-id="currentWebinar.id"
          />
          <img 
            v-else
            :src="currentWebinar.thumbnailUrl" 
            :alt="currentWebinar.title"
            class="w-full"
          >
          <LiveIndicator v-if="currentWebinar.isLive" />
          <ViewerCount 
            v-if="currentWebinar.isLive" 
            :count="currentWebinar.viewerCount" 
          />
        </div>
  
        <div class="space-y-6">
          <section>
            <h2 class="mb-3 text-lg font-semibold">Description</h2>
            <p class="text-gray-600">{{ currentWebinar.description }}</p>
          </section>
  
          <section>
            <h2 class="mb-3 text-lg font-semibold">Goals</h2>
            <ul class="space-y-2">
              <li 
                v-for="(goal, index) in currentWebinar.goals" 
                :key="index"
                class="flex items-start gap-2 text-gray-600"
              >
                <CheckCircle class="mt-1 h-4 w-4 text-red-500" />
                {{ goal }}
              </li>
            </ul>
          </section>
        </div>
      </div>
  
      <div class="space-y-6">
        <div class="rounded-xl border border-gray-200 bg-white p-6">
          <div class="mb-6 flex items-center gap-4">
            <img 
              :src="currentWebinar.lecturer.avatar" 
              :alt="currentWebinar.lecturer.name"
              class="h-16 w-16 rounded-full"
            >
            <div>
              <h3 class="font-semibold">{{ currentWebinar.lecturer.name }}</h3>
              <p class="text-sm text-gray-600">Lecturer</p>
            </div>
          </div>
  
          <button 
            v-if="!currentWebinar.isLive"
            class="w-full rounded-lg bg-red-500 py-3 text-sm font-medium text-white hover:bg-red-600"
            @click="router.push({ 
              name: 'webinar-registration', 
              params: { id: currentWebinar.id }
            })"
          >
            Register Now
          </button>
        </div>
  
        <ChatBox 
          v-if="currentWebinar.isLive"
          :webinar-id="currentWebinar.id"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { Calendar, Clock, CheckCircle } from 'lucide-vue-next'
  import { useWebinarStore } from '../../stores/webinar'
  import LiveIndicator from '../../components/shared/LiveIndicator.vue'
  import ViewerCount from '../../components/shared/ViewerCount.vue'
  import WebinarStream from '../../components/webinar/WebinarStream.vue'
  import ChatBox from '../../components/webinar/ChatBox.vue'
  
  const router = useRouter()
  const route = useRoute()
  const webinarStore = useWebinarStore()
  const { currentWebinar } = storeToRefs(webinarStore)
  
  onMounted(async () => {
    await webinarStore.fetchWebinarById(route.params.id as string)
  })
  
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
  
  const formatDuration = (start: string, end: string) => {
    const duration = new Date(end).getTime() - new Date(start).getTime()
    const hours = Math.floor(duration / (1000 * 60 * 60))
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60))
    return `${hours}h ${minutes}m`
  }
  </script>