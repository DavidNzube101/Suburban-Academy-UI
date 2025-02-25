<template>
    <div class="space-y-8">
      <h2 class="text-xl font-semibold">Notifications</h2>
  
      <div class="space-y-6">
        <!-- Unread Notification Badge -->
        <div class="flex items-center justify-between">
          <div>
            <h3 class="font-medium">Unread Notification Badge</h3>
            <p class="text-sm text-gray-600">
              Display a badge with new notifications waiting for you inside the app
            </p>
          </div>
          <Switch
            v-model="notifications.unreadBadge"
            class="relative inline-flex h-6 w-11 items-center rounded-full"
            :class="notifications.unreadBadge ? 'bg-blue-500' : 'bg-gray-200'"
          >
            <span class="sr-only">Enable unread notification badge</span>
            <span
              class="inline-block h-4 w-4 transform rounded-full bg-white transition"
              :class="notifications.unreadBadge ? 'translate-x-6' : 'translate-x-1'"
            />
          </Switch>
        </div>
  
        <!-- Push Notifications -->
        <div class="flex items-center justify-between">
          <div>
            <h3 class="font-medium">Push Notifications</h3>
            <p class="text-sm text-gray-600">
              Display a badge with new notifications waiting for you inside the app
            </p>
          </div>
          <Switch
            v-model="notifications.push"
            class="relative inline-flex h-6 w-11 items-center rounded-full"
            :class="notifications.push ? 'bg-blue-500' : 'bg-gray-200'"
          >
            <span class="sr-only">Enable push notifications</span>
            <span
              class="inline-block h-4 w-4 transform rounded-full bg-white transition"
              :class="notifications.push ? 'translate-x-6' : 'translate-x-1'"
            />
          </Switch>
        </div>
  
        <!-- Email Notifications -->
        <div class="flex items-center justify-between">
          <div>
            <h3 class="font-medium">Email Notifications</h3>
            <p class="text-sm text-gray-600">
              Display a badge with new notifications waiting for you inside the app
            </p>
          </div>
          <Switch
            v-model="notifications.email"
            class="relative inline-flex h-6 w-11 items-center rounded-full"
            :class="notifications.email ? 'bg-blue-500' : 'bg-gray-200'"
          >
            <span class="sr-only">Enable email notifications</span>
            <span
              class="inline-block h-4 w-4 transform rounded-full bg-white transition"
              :class="notifications.email ? 'translate-x-6' : 'translate-x-1'"
            />
          </Switch>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const notifications = ref({
    unreadBadge: true,
    push: true,
    email: true
  })
  </script>