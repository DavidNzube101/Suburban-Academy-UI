<template>
    <div class="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:border-red-500">
      <div class="relative">
        <img 
          :src="webinar.thumbnailUrl" 
          :alt="webinar.title"
          class="aspect-video w-full object-cover"
        >
        <LiveIndicator v-if="webinar.isLive" />
        <ViewerCount 
          v-if="webinar.isLive" 
          :count="webinar.viewerCount" 
        />
      </div>
  
      <div class="p-4">
        <div class="mb-4 flex items-center justify-between">
          <h3 class="text-lg font-semibold group-hover:text-red-500">
            {{ webinar.title }}
          </h3>
          <MoreVertical class="h-5 w-5 text-gray-400" />
        </div>
  
        <p class="mb-4 line-clamp-2 text-sm text-gray-600">
          {{ webinar.description }}
        </p>
  
        <div class="flex items-center gap-3">
          <img 
            :src="webinar.lecturer.avatar" 
            :alt="webinar.lecturer.name"
            class="h-8 w-8 rounded-full"
          >
          <div class="text-sm">
            <p class="font-medium">Lecturer:</p>
            <p class="text-gray-600">{{ webinar.lecturer.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { MoreVertical } from 'lucide-vue-next'
  import type { Webinar } from '../../types/webinar'
  import LiveIndicator from '../shared/LiveIndicator.vue'
  import ViewerCount from '../shared/ViewerCount.vue'
  
  defineProps<{
    webinar: Webinar
  }>()
  </script>