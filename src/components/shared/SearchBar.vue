<template>
  <div class="relative">
    <Search class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
    <input
      type="text"
      placeholder="Search"
      class="h-10 w-[280px] rounded-lg bg-white pl-10 pr-4 text-sm text-gray-600 placeholder-gray-400 shadow-sm ring-1 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
    >
  </div>
</template>

<script setup lang="ts">
import { Search } from 'lucide-vue-next'
</script>