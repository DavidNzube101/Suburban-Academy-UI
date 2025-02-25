<template>
    <div>
      <div class="mb-8 flex items-start justify-between">
        <h2 class="text-xl font-semibold">Personal Information</h2>
        <div class="text-center">
          <img
            src="https://placehold.co/32x32"
            alt="Profile picture"
            class="mb-2 h-20 w-20 rounded-full object-cover"
          >
          <button class="rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600">
            Change Profile
          </button>
        </div>
      </div>
  
      <form @submit.prevent="saveProfile" class="space-y-6">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="mb-1.5 block text-sm font-medium text-gray-700">First Name</label>
            <input
              v-model="profile.firstName"
              type="text"
              class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-red-500 focus:outline-none"
            >
          </div>
          <div>
            <label class="mb-1.5 block text-sm font-medium text-gray-700">Last Name</label>
            <input
              v-model="profile.lastName"
              type="text"
              class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-red-500 focus:outline-none"
            >
          </div>
        </div>
  
        <div>
          <label class="mb-1.5 block text-sm font-medium text-gray-700">Email Address</label>
          <input
            v-model="profile.email"
            type="email"
            class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-red-500 focus:outline-none"
          >
        </div>
  
        <div>
          <label class="mb-1.5 block text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            v-model="profile.dateOfBirth"
            type="date"
            class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-red-500 focus:outline-none"
          >
        </div>
  
        <h3 class="mt-8 text-lg font-semibold">Contact Details</h3>
  
        <div>
          <label class="mb-1.5 block text-sm font-medium text-gray-700">Mobile</label>
          <input
            v-model="profile.mobile"
            type="tel"
            class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-red-500 focus:outline-none"
          >
        </div>
  
        <div>
          <label class="mb-1.5 block text-sm font-medium text-gray-700">Location</label>
          <input
            v-model="profile.location"
            type="text"
            class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-red-500 focus:outline-none"
          >
        </div>
  
        <div>
          <label class="mb-1.5 block text-sm font-medium text-gray-700">Interface Language</label>
          <select
            v-model="profile.language"
            class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-red-500 focus:outline-none"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const profile = ref({
    firstName: 'David',
    lastName: '',
    email: '',
    dateOfBirth: '',
    mobile: '',
    location: '',
    language: 'en'
  })
  
  const saveProfile = () => {
    // Implement save functionality
    console.log('Saving profile:', profile.value)
  }
  </script>