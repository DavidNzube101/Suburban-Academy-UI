<template>
  <aside class="fixed left-0 top-0 h-full w-64 rounded-r-3xl bg-black text-white">
    <div class="p-6">
      <div class="flex items-center gap-2">
        <img src="../../../public/suburban-logo.png" alt="Suburban Academy logo" class="h-8 w-8">
        <div class="flex flex-col">
          <span class="text-lg font-semibold leading-tight">Suburban</span>
          <span class="text-lg font-semibold leading-tight">Academy</span>
        </div>
      </div>
    </div>
    
    <nav class="flex flex-col justify-between h-[calc(100%-96px)]">
      <div class="space-y-1 px-4">
        <RouterLink
          v-for="item in menuItems.filter(item => item.name !== 'Settings')"
          :key="item.name"
          :to="item.path"
          :class="[
            'flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors rounded-lg',
            isCurrentRoute(item.path) 
              ? 'text-red-500' 
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          ]"
        >
          <component :is="item.icon" class="h-5 w-5" />
          {{ item.name }}
        </RouterLink>
      </div>

      <!-- Settings at bottom -->
      <div class="px-4 mb-6">
        <RouterLink
          v-for="item in menuItems.filter(item => item.name === 'Settings')"
          :key="item.name"
          :to="item.path"
          :class="[
            'flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors rounded-lg',
            isCurrentRoute(item.path) 
              ? 'text-red-500' 
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          ]"
        >
          <component :is="item.icon" class="h-5 w-5" />
          {{ item.name }}
        </RouterLink>
      </div>
    </nav>
  </aside>
</template>

<script setup lang="ts">
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

<style scoped>
.router-link-active {
  @apply text-red-500;
}
</style>