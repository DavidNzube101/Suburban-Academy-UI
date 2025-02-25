<template>
    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold">Courses</h1>
        <button class="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600">
          <Plus class="mr-2 inline-block h-4 w-4" />
          New Course
        </button>
      </div>
  
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div 
          v-for="course in courses" 
          :key="course.id"
          class="overflow-hidden rounded-xl border border-gray-200 bg-white"
        >
          <img 
            :src="course.thumbnail" 
            :alt="course.title"
            class="aspect-video w-full object-cover"
          >
          <div class="p-4">
            <h3 class="mb-2 text-lg font-semibold">{{ course.title }}</h3>
            <p class="mb-4 text-sm text-gray-600">{{ course.description }}</p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">{{ course.lessons }} lessons</span>
              <span class="text-sm font-medium text-red-500">{{ course.duration }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Plus } from 'lucide-vue-next'
  
  // Mock data - would come from API in real app
  const courses = [
    {
      id: 1,
      title: 'Introduction to UI Design',
      description: 'Learn the fundamentals of UI design and create beautiful interfaces.',
      thumbnail: '/placeholder.svg?height=200&width=400',
      lessons: 12,
      duration: '6 hours'
    },
    // Add more courses...
  ]
  </script>