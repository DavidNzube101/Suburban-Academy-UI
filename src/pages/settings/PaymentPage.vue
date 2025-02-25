<template>
    <div>
      <h2 class="mb-6 text-xl font-semibold">Payment Methods</h2>
      
      <div class="space-y-6">
        <!-- Paystack Option -->
        <div class="flex items-start gap-3">
          <input
            type="radio"
            id="paystack"
            name="payment"
            value="paystack"
            v-model="selectedMethod"
            class="mt-1 h-4 w-4 text-red-500 focus:ring-red-500"
          >
          <div class="flex-1">
            <label for="paystack" class="block font-medium">Secured by Paystack</label>
            <div class="mt-2 rounded-lg border border-gray-200 p-4">
              <img src="/visa-logo.svg" alt="Visa" class="h-6">
            </div>
          </div>
        </div>
  
        <!-- Stripe Option -->
        <div class="flex items-start gap-3">
          <input
            type="radio"
            id="stripe"
            name="payment"
            value="stripe"
            v-model="selectedMethod"
            class="mt-1 h-4 w-4 text-red-500 focus:ring-red-500"
          >
          <div class="flex-1">
            <label for="stripe" class="block font-medium">Credit Card (Stripe)</label>
            <p class="mt-1 text-sm text-gray-600">Pay with your credit card</p>
            
            <div v-if="selectedMethod === 'stripe'" class="mt-4 space-y-4 rounded-lg bg-gray-50 p-4">
              <div>
                <label class="mb-1.5 block text-sm font-medium text-gray-700">Card Number</label>
                <input
                  type="text"
                  class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-red-500 focus:outline-none"
                >
              </div>
              
              <div class="grid grid-cols-3 gap-4">
                <div>
                  <label class="mb-1.5 block text-sm font-medium text-gray-700">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-red-500 focus:outline-none"
                  >
                </div>
                <div>
                  <label class="mb-1.5 block text-sm font-medium text-gray-700">Card Code (CVC)</label>
                  <input
                    type="text"
                    class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-red-500 focus:outline-none"
                  >
                </div>
                <div>
                  <label class="mb-1.5 block text-sm font-medium text-gray-700">PIN</label>
                  <input
                    type="password"
                    class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-red-500 focus:outline-none"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <button class="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600">
          Add Payment Method
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const selectedMethod = ref('paystack')
  </script>