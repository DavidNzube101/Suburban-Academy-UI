<template>
    <div class="space-y-8">
      <h2 class="text-xl font-semibold">Display</h2>
  
      <div class="space-y-6">
        <!-- Media Preview -->
        <div class="flex items-center justify-between">
          <div>
            <h3 class="font-medium">Media</h3>
            <p class="text-sm text-gray-600">Media Preview</p>
          </div>
          <Switch
            v-model="display.media"
            class="relative inline-flex h-6 w-11 items-center rounded-full"
            :class="display.media ? 'bg-blue-500' : 'bg-gray-200'"
          >
            <span class="sr-only">Enable media preview</span>
            <span
              class="inline-block h-4 w-4 transform rounded-full bg-white transition"
              :class="display.media ? 'translate-x-6' : 'translate-x-1'"
            />
          </Switch>
        </div>
  
        <!-- Sound Preview -->
        <div class="flex items-center justify-between">
          <div>
            <h3 class="font-medium">Sound</h3>
            <p class="text-sm text-gray-600">Sound Preview</p>
          </div>
          <Switch
            v-model="display.sound"
            class="relative inline-flex h-6 w-11 items-center rounded-full"
            :class="display.sound ? 'bg-blue-500' : 'bg-gray-200'"
          >
            <span class="sr-only">Enable sound preview</span>
            <span
              class="inline-block h-4 w-4 transform rounded-full bg-white transition"
              :class="display.sound ? 'translate-x-6' : 'translate-x-1'"
            />
          </Switch>
        </div>
  
        <!-- Background Theme -->
        <div>
          <h3 class="mb-3 font-medium">Background</h3>
          <div class="flex gap-4">
            <button
              @click="setTheme('light')"
              class="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50"
              :class="{ 'border-blue-500 bg-blue-50 text-blue-600': display.theme === 'light' }"
            >
              Light mode
            </button>
            <button
              @click="setTheme('dark')"
              class="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50"
              :class="{ 'border-blue-500 bg-blue-50 text-blue-600': display.theme === 'dark' }"
            >
              Dark mode
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const display = ref({
    media: true,
    sound: true,
    theme: 'light'
  })
  
  const setTheme = (theme: 'light' | 'dark') => {
    display.value.theme = theme
    // Add logic to update theme in your app
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }
  </script>