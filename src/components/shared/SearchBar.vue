<template>
    <div class="relative">
      <Search class="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
      <input 
        v-model="searchQuery"
        type="search"
        placeholder="Search"
        class="h-10 w-80 rounded-lg border border-gray-200 pl-10 pr-4 text-sm focus:border-red-500 focus:outline-none"
        @input="handleSearch"
      >
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { Search } from 'lucide-vue-next'
  
  const searchQuery = ref('')
  const emit = defineEmits<{
    (e: 'search', query: string): void
  }>()
  
  const handleSearch = () => {
    emit('search', searchQuery.value)
  }
  </script>