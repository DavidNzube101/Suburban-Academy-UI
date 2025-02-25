<template>
    <div class="space-y-6">
      <h1 class="text-2xl font-bold">Dashboard</h1>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div v-for="stat in stats" :key="stat.title" 
             class="rounded-xl border border-gray-200 bg-white p-6">
          <component :is="stat.icon" class="mb-4 h-8 w-8 text-red-500" />
          <h3 class="text-lg font-semibold">{{ stat.title }}</h3>
          <p class="text-3xl font-bold">{{ stat.value }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { BookOpen, Users, Video } from 'lucide-vue-next'
  
  const stats = [
    { title: 'Total Courses', value: '24', icon: BookOpen },
    { title: 'Active Students', value: '2,834', icon: Users },
    { title: 'Live Webinars', value: '12', icon: Video }
  ]
  </script>