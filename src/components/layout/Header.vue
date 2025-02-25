<template>
  <header class="sticky top-0 z-20 bg-[#f9fafb] px-4 py-4 lg:px-8">
    <div class="flex flex-wrap items-center gap-4">
      <!-- Left side -->
      <div class="flex w-full items-center gap-4 lg:w-auto">
        <button 
          v-if="showBackButton"
          @click="router.back()" 
          class="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft class="h-5 w-5" />
          Back
        </button>
        <div class="flex-1 lg:w-[280px] lg:flex-none">
          <SearchBar />
        </div>
      </div>

      <!-- Right side -->
      <div class="ml-auto">
        <UserProfile />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ChevronLeft } from 'lucide-vue-next'
import SearchBar from '../shared/SearchBar.vue'
import UserProfile from '../shared/UserProfile.vue'

const router = useRouter()
const route = useRoute()

const showBackButton = computed(() => {
  return !['/', '/dashboard'].includes(route.path)
})
</script>