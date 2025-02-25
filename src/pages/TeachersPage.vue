<template>
    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold">Teachers</h1>
        <div class="flex items-center gap-4">
          <select 
            v-model="filter"
            class="rounded-lg border border-gray-200 px-4 py-2 text-sm focus:border-red-500 focus:outline-none"
          >
            <option value="all">All Departments</option>
            <option value="design">Design</option>
            <option value="development">Development</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
      </div>
  
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div 
          v-for="teacher in teachers" 
          :key="teacher.id"
          class="rounded-xl border border-gray-200 bg-white p-6 text-center"
        >
          <img 
            :src="teacher.avatar" 
            :alt="teacher.name"
            class="mx-auto mb-4 h-24 w-24 rounded-full"
          >
          <h3 class="mb-1 text-lg font-semibold">{{ teacher.name }}</h3>
          <p class="mb-4 text-sm text-gray-600">{{ teacher.role }}</p>
          <div class="flex justify-center gap-4">
            <button class="text-gray-400 hover:text-gray-600">
              <Mail class="h-5 w-5" />
            </button>
            <button class="text-gray-400 hover:text-gray-600">
              <Calendar class="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { Mail, Calendar } from 'lucide-vue-next'
  
  const filter = ref('all')
  
  // Mock data - would come from API in real app
  const teachers = [
    {
      id: 1,
      name: 'Jane Doe',
      role: 'UI/UX Design Lead',
      avatar: '/placeholder.svg?height=96&width=96'
    },
    // Add more teachers...
  ]
  </script>