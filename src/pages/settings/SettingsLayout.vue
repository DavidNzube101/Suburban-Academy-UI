<template>
    <div class="min-h-screen bg-gray-50 p-4 lg:p-8">
      <h1 class="mb-6 text-2xl font-bold">Settings</h1>
      
      <div class="flex flex-col gap-6 lg:flex-row">
        <!-- Settings Navigation -->
        <nav class="w-full rounded-lg bg-white p-4 shadow-sm lg:w-60 lg:shrink-0">
          <RouterLink
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path !== '/logout' ? `/settings${item.path}` : ''"
            @click="handleLogout(item.path)"
            class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-600 transition-colors hover:bg-gray-50"
            :class="{ 'bg-gray-50 font-medium text-gray-900': isCurrentPath(item.path) }"
          >
            <component :is="item.icon" class="h-5 w-5" />
            {{ item.name }}
          </RouterLink>
        </nav>
  
        <!-- Content Area -->
        <div class="flex-1 rounded-lg bg-white p-4 shadow-sm lg:p-6">
          <RouterView />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useAuth } from '../../composables/useAuth'
  import { useRoute } from 'vue-router'
  import {
    User,
    CreditCard,
    ShoppingCart,
    Newspaper,
    Bell,
    Monitor,
    LogOut
  } from 'lucide-vue-next'
  
  const route = useRoute()
  const { logout } = useAuth()
  
  const navigationItems = [
    { name: 'Profile', icon: User, path: '/profile' },
    { name: 'Payment Methods', icon: CreditCard, path: '/payment' },
    { name: 'Orders', icon: ShoppingCart, path: '/orders' },
    { name: 'Subscription', icon: Newspaper, path: '/subscription' },
    { name: 'Notifications', icon: Bell, path: '/notifications' },
    { name: 'Display', icon: Monitor, path: '/display' },
    { name: 'Log out', icon: LogOut, path: '/logout' }
  ]
  
  const isCurrentPath = (path: string) => route.path === `/settings${path}`
  
  const handleLogout = async (path: string) => {
    if (path === '/logout') {
      await logout()
    }
  }
  </script>