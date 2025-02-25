<template>
    <header class="mb-8 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <button 
          v-if="showBackButton"
          @click="router.back()" 
          class="text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft class="h-5 w-5" />
          Back
        </button>
        <SearchBar />
      </div>
      <UserProfile />
    </header>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { ChevronLeft } from 'lucide-vue-next'
  import SearchBar from '../../components/shared/SearchBar.vue'
  import UserProfile from '../../components/shared/UserProfile.vue'
  
  const router = useRouter()
  const route = useRoute()
  
  const showBackButton = computed(() => {
    return !['/', '/dashboard'].includes(route.path)
  })
  </script>