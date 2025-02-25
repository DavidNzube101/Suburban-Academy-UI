<template>
    <aside class="fixed left-0 top-0 h-full w-64 bg-black text-white">
      <div class="p-6">
        <div class="flex items-center gap-2 text-xl font-bold">
          <!-- <div class="h-6 w-1 bg-red-600"></div> -->
           <img src="../../../public/suburban-logo.png" alt="logo" class="h-10 w-10">
          Suburban<br/>Academy
        </div>
      </div>
      
      <nav class="mt-6 space-y-2 px-4">
        <RouterLink
          v-for="item in menuItems"
          :key="item.name"
          :to="item.path"
          :class="[
            'flex items-center gap-3 px-4 py-3 text-sm transition-colors',
            isCurrentRoute(item.path) ? 'text-red-500' : 'text-gray-400 hover:text-white'
          ]"
        >
          <component :is="item.icon" class="h-5 w-5" />
          {{ item.name }}
        </RouterLink>
      </nav>
    </aside>
  </template>
  
  <script setup lang="ts">
  // import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import type { MenuItem } from '../../types/navigation'
  import { 
    LayoutDashboard,
    BookOpen,
    Users,
    MessageCircle,
    Calendar,
    Radio,
    Award,
    Settings
  } from 'lucide-vue-next'
  
  const route = useRoute()
  
  const menuItems: MenuItem[] = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'Courses', icon: BookOpen, path: '/courses' },
    { name: 'Teachers', icon: Users, path: '/teachers' },
    { name: 'Messages', icon: MessageCircle, path: '/messages' },
    { name: 'Calendar', icon: Calendar, path: '/calendar' },
    { name: 'Webinars', icon: Radio, path: '/webinars' },
    { name: 'Certificates', icon: Award, path: '/certificates' },
    { name: 'Settings', icon: Settings, path: '/settings' }
  ]
  
  const isCurrentRoute = (path: string) => route.path === path
  </script>