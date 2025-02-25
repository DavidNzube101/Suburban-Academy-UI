<template>
    <div class="mx-auto max-w-2xl">
      <div class="mb-8 text-center">
        <h1 class="text-2xl font-bold">Register for Webinar</h1>
        <p class="mt-2 text-gray-600">
          Complete the form below to secure your spot in the webinar
        </p>
      </div>
  
      <div class="rounded-xl border border-gray-200 bg-white p-6">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid gap-6 md:grid-cols-2">
            <div class="space-y-2">
              <label class="text-sm font-medium">First Name</label>
              <input
                v-model="form.firstName"
                type="text"
                :class="[
                  'w-full rounded-lg border px-4 py-2 text-sm focus:outline-none',
                  errors.firstName 
                    ? 'border-red-500 focus:border-red-500' 
                    : 'border-gray-200 focus:border-red-500'
                ]"
              >
              <p v-if="errors.firstName" class="text-xs text-red-500">
                {{ errors.firstName }}
              </p>
            </div>
  
            <div class="space-y-2">
              <label class="text-sm font-medium">Last Name</label>
              <input
                v-model="form.lastName"
                type="text"
                :class="[
                  'w-full rounded-lg border px-4 py-2 text-sm focus:outline-none',
                  errors.lastName 
                    ? 'border-red-500 focus:border-red-500' 
                    : 'border-gray-200 focus:border-red-500'
                ]"
              >
              <p v-if="errors.lastName" class="text-xs text-red-500">
                {{ errors.lastName }}
              </p>
            </div>
          </div>
  
          <div class="space-y-2">
            <label class="text-sm font-medium">Email</label>
            <input
              v-model="form.email"
              type="email"
              :class="[
                'w-full rounded-lg border px-4 py-2 text-sm focus:outline-none',
                errors.email 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-gray-200 focus:border-red-500'
              ]"
            >
            <p v-if="errors.email" class="text-xs text-red-500">
              {{ errors.email }}
            </p>
          </div>
  
          <div class="space-y-2">
            <label class="text-sm font-medium">Phone Number</label>
            <input
              v-model="form.phone"
              type="tel"
              :class="[
                'w-full rounded-lg border px-4 py-2 text-sm focus:outline-none',
                errors.phone 
                    ? 'border-red-500 focus:border-red-500' 
                    : 'border-gray-200 focus:border-red-500'
                ]"
            >
            <p v-if="errors.phone" class="text-xs text-red-500">
              {{ errors.phone }}
            </p>
          </div>
  
          <div class="space-y-2">
            <label class="flex items-center gap-2">
              <input
                v-model="form.agreeToTerms"
                type="checkbox"
                class="rounded border-gray-300 text-red-500 focus:ring-red-500"
              >
              <span class="text-sm text-gray-600">
                I agree to the terms and conditions
              </span>
            </label>
            <p v-if="errors.agreeToTerms" class="text-xs text-red-500">
              {{ errors.agreeToTerms }}
            </p>
          </div>
  
          <button
            type="submit"
            class="w-full rounded-lg bg-red-500 py-3 text-sm font-medium text-white hover:bg-red-600 disabled:opacity-50"
            :disabled="isSubmitting"
          >
            <Loader2 v-if="isSubmitting" class="mr-2 inline h-4 w-4 animate-spin" />
            {{ isSubmitting ? 'Registering...' : 'Complete Registration' }}
          </button>
        </form>
      </div>
    </div>
  
    <NotificationModal
      v-model:show="showSuccessModal"
      title="Registration Successful!"
      type="success"
    >
      <p>
        You have successfully registered for the webinar. 
        A confirmation email has been sent to your inbox.
      </p>
      <template #footer>
        <button
          @click="router.push({ name: 'webinars' })"
          class="w-full rounded-lg bg-red-500 py-2 text-sm font-medium text-white hover:bg-red-600"
        >
          Back to Webinars
        </button>
      </template>
    </NotificationModal>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { Loader2 } from 'lucide-vue-next'
  import { useWebinarStore } from '../../stores/webinar'
  import NotificationModal from '../components/shared/NotificationModal.vue'
  import { validateEmail, validatePhone } from '../../utils/validation'
  
  const router = useRouter()
  const route = useRoute()
  const webinarStore = useWebinarStore()
  
  const form = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    agreeToTerms: false
  })
  
  const errors = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    agreeToTerms: ''
  })
  
  const isSubmitting = ref(false)
  const showSuccessModal = ref(false)
  
  const validateForm = () => {
    let isValid = true
    
    // Reset errors
    Object.keys(errors).forEach(key => {
      errors[key as keyof typeof errors] = ''
    })
  
    if (!form.firstName.trim()) {
      errors.firstName = 'First name is required'
      isValid = false
    }
  
    if (!form.lastName.trim()) {
      errors.lastName = 'Last name is required'
      isValid = false
    }
  
    if (!form.email.trim()) {
      errors.email = 'Email is required'
      isValid = false
    } else if (!validateEmail(form.email)) {
      errors.email = 'Please enter a valid email'
      isValid = false
    }
  
    if (!form.phone.trim()) {
      errors.phone = 'Phone number is required'
      isValid = false
    } else if (!validatePhone(form.phone)) {
      errors.phone = 'Please enter a valid phone number'
      isValid = false
    }
  
    if (!form.agreeToTerms) {
      errors.agreeToTerms = 'You must agree to the terms and conditions'
      isValid = false
    }
  
    return isValid
  }
  
  const handleSubmit = async () => {
    if (!validateForm()) return
  
    isSubmitting.value = true
  
    try {
      await webinarStore.registerForWebinar(route.params.id as string, {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone
      })
      showSuccessModal.value = true
    } catch (error) {
      // Handle error
    } finally {
      isSubmitting.value = false
    }
  }
  </script>