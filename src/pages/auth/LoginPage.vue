<template>
    <div class="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <!-- Logo -->
        <div class="text-center">
          <div class="mx-auto flex w-48 items-center justify-center text-black font-bold text-left">
            <img src="../../../public/suburban-logo.png" alt="logo" class="h-10 w-10 rounded-md mr-2">
            Suburban<br/>Academy
          </div>
          <h2 class="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
  
        <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
          <div class="space-y-4 rounded-md">
            <div>
              <label for="email" class="sr-only">Email address</label>
              <input
                id="email"
                v-model="form.email"
                name="email"
                type="email"
                required
                class="relative block w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-red-500 focus:outline-none"
                placeholder="Email address"
              >
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input
                id="password"
                v-model="form.password"
                name="password"
                type="password"
                required
                class="relative block w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-red-500 focus:outline-none"
                placeholder="Password"
              >
            </div>
          </div>
  
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                v-model="form.rememberMe"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-red-500 focus:ring-red-500"
              >
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
  
            <div class="text-sm">
              <a href="#" class="font-medium text-red-600 hover:text-red-500">
                Forgot your password?
              </a>
            </div>
          </div>
  
          <div>
            <button
              type="submit"
              :disabled="isLoading"
              class="group relative flex w-full justify-center rounded-lg bg-red-500 px-4 py-3 text-sm font-medium text-white hover:bg-red-600 focus:outline-none disabled:opacity-50"
            >
              <Loader2 
                v-if="isLoading"
                class="mr-2 h-4 w-4 animate-spin"
              />
              {{ isLoading ? 'Signing in...' : 'Sign in' }}
            </button>
          </div>
        </form>
  
        <p class="mt-2 text-center text-sm text-gray-600">
          Don't have an account?
          <RouterLink
            to="/register"
            class="font-medium text-red-600 hover:text-red-500"
          >
            Sign up
          </RouterLink>
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import { Loader2 } from 'lucide-vue-next'
  
  const router = useRouter()
  const isLoading = ref(false)
  
  const form = reactive({
    email: '',
    password: '',
    rememberMe: false
  })
  
  const handleSubmit = async () => {
    isLoading.value = true
    
    try {
      // In a real app, you would make an API call here
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Simulate successful login
      localStorage.setItem('auth_token', 'dummy_token')
      router.push('/')
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      isLoading.value = false
    }
  }
  </script>