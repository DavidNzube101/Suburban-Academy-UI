<template>
    <div class="relative">
      <button 
        class="flex items-center gap-3"
        @click="isOpen = !isOpen"
      >
        <img 
          :src="user.avatar" 
          :alt="user.name"
          class="h-8 w-8 rounded-full"
        >
        <span class="text-sm font-medium">{{ user.name }}</span>
        <ChevronDown 
          class="h-4 w-4 text-gray-400"
          :class="{ 'rotate-180': isOpen }"
        />
      </button>
  
      <div 
        v-if="isOpen"
        class="absolute right-0 top-full mt-2 w-48 rounded-lg border border-gray-200 bg-white py-2 shadow-lg"
      >
        <RouterLink
          v-for="item in menuItems"
          :key="item.label"
          :to="item.to"
          class="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        >
          <component :is="item.icon" class="h-4 w-4" />
          {{ item.label }}
        </RouterLink>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { ChevronDown, User, Settings, LogOut } from 'lucide-vue-next'
  
  const isOpen = ref(false)
  
  // This would come from your auth store in a real app
  const user = {
    name: 'David',
    avatar: '/placeholder.svg?height=32&width=32'
  }
  
  const menuItems = [
    { label: 'Profile', icon: User, to: '/profile' },
    { label: 'Settings', icon: Settings, to: '/settings' },
    { label: 'Logout', icon: LogOut, to: '/logout' }
  ]
  </script>