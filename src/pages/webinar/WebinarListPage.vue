<template>
    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold">Webinars</h1>
        <div class="flex items-center gap-4">
          <select 
            v-model="filter"
            class="rounded-lg border border-gray-200 px-4 py-2 text-sm focus:border-red-500 focus:outline-none"
          >
            <option value="all">All Videos</option>
            <option value="live">Live Now</option>
            <option value="upcoming">Upcoming</option>
            <option value="past">Past Webinars</option>
          </select>
        </div>
      </div>
  
      <div v-if="loading" class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <WebinarCardSkeleton v-for="n in 6" :key="n" />
      </div>
  
      <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <RouterLink
          v-for="webinar in filteredWebinars"
          :key="webinar.id"
          :to="{ name: 'webinar-detail', params: { id: webinar.id }}"
        >
          <WebinarCard :webinar="webinar" />
        </RouterLink>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useWebinarStore } from '../../stores/webinar'
  import WebinarCard from '../../components/webinar/WebinarCard.vue'
  import WebinarCardSkeleton from '../../components/webinar/WebinarCardSkeleton.vue'
  
  const webinarStore = useWebinarStore()
  const { webinars, loading } = storeToRefs(webinarStore)
  const filter = ref('all')
  
  const filteredWebinars = computed(() => {
    switch (filter.value) {
      case 'live':
        return webinars.value.filter(w => w.isLive)
      case 'upcoming':
        return webinars.value.filter(w => new Date(w.startTime) > new Date())
      case 'past':
        return webinars.value.filter(w => new Date(w.endTime) < new Date())
      default:
        return webinars.value
    }
  })
  
  onMounted(() => {
    webinarStore.fetchWebinars()
  })
  </script>