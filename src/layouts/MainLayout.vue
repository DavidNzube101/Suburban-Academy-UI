<template>
    <div class="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main class="ml-52 flex-1">
        <div class="mx-auto max-w-7xl px-8 py-6">
          <Header />
          <slot />
          <RouterView />
        </div>
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import Sidebar from '../components/layout/Sidebar.vue'
  import Header from '../components/layout/Header.vue'
  </script>