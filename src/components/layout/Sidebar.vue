<template>
  <div class="relative">
    <!-- Mobile Menu Trigger -->
    <button
      @click="isOpen = !isOpen"
      class="fixed left-4 top-4 z-40 rounded-lg bg-black p-2 text-white lg:hidden"
    >
      <Menu v-if="!isOpen" class="h-6 w-6" />
      <X v-else class="h-6 w-6" />
    </button>

    <!-- Sidebar Backdrop -->
    <div
      v-if="isOpen"
      class="fixed inset-0 z-30 bg-black/50 lg:hidden"
      @click="isOpen = false"
    />

    <aside :class="[
        'fixed left-0 top-0 z-30 h-full w-64 transform bg-black text-white transition-transform duration-200 ease-in-out',
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      ]">
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'
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
const isOpen = ref(false)
const isCurrentRoute = (path: string) => route.path === path

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
</script>