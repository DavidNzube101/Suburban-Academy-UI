<template>
  <header class="sticky top-0 z-10 mb-8 flex h-16 items-center justify-between bg-gray-50 px-8">
    <div class="flex items-center gap-4">
      <button 
        v-if="showBackButton"
        @click="router.back()" 
        class="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900"
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
import SearchBar from '../shared/SearchBar.vue'
import UserProfile from '../shared/UserProfile.vue'

const router = useRouter()
const route = useRoute()

const showBackButton = computed(() => {
  return !['/', '/dashboard'].includes(route.path)
})
</script>