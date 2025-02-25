<template>
    <div class="absolute bottom-4 left-4 flex items-center gap-2">
      <div class="flex -space-x-1">
        <div v-for="i in 5" :key="i" class="h-2 w-2 rounded-full bg-white"></div>
      </div>
      <span class="text-xs text-white">{{ formatCount() }} viewers</span>
    </div>
  </template>
  
  <script setup lang="ts">
  const { count } = defineProps<{
    count: number
  }>()

  const formatCount = (): string => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`
    }
    return count.toString()
  }
  </script>