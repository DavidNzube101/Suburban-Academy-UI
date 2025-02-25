<template>
  <div class="flex items-center gap-3">
    <div class="flex items-center gap-3 rounded-md bg-white px-2 py-1 shadow-sm ring-1 ring-gray-200">
      <img
        src="https://placehold.co/32x32"
        alt="User avatar"
        class="h-8 w-8 rounded-full object-cover"
      >
      <div class="flex flex-row">
        <div class="flex flex-col">
          <span class="text-sm font-medium text-gray-900">David</span>
          <span class="text-xs text-gray-500">Student</span>
        </div>
        <button class="rounded-full p-2 hover:bg-gray-100">
          <MoreVertical class="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { MoreVertical } from 'lucide-vue-next'
</script>