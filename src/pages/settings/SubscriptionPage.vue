<template>
    <div class="space-y-6">
      <h2 class="text-xl font-semibold">Subscription</h2>
  
      <!-- Status Section -->
      <div class="rounded-lg border border-gray-200">
        <div class="bg-purple-500 px-4 py-2 text-white">
          <h3 class="font-medium">Status</h3>
        </div>
        <div class="divide-y divide-gray-200">
          <div class="grid grid-cols-2 px-4 py-3">
            <span class="text-sm text-gray-600">Start Date</span>
            <span class="text-sm font-medium">Oct 1, 2024</span>
          </div>
          <div class="grid grid-cols-2 px-4 py-3">
            <span class="text-sm text-gray-600">Last Order Date</span>
            <span class="text-sm font-medium">Oct 1, 2024</span>
          </div>
          <div class="grid grid-cols-2 px-4 py-3">
            <span class="text-sm text-gray-600">Next Payment Date</span>
            <span class="text-sm font-medium">Nov 1, 2024</span>
          </div>
          <div class="grid grid-cols-2 px-4 py-3">
            <span class="text-sm text-gray-600">Payment</span>
            <span class="text-sm font-medium">Active</span>
          </div>
        </div>
      </div>
  
      <!-- Subscription Details -->
      <div class="rounded-lg border border-gray-200">
        <div class="bg-purple-500 px-4 py-2 text-white">
          <h3 class="font-medium">Subscription</h3>
        </div>
        <div class="divide-y divide-gray-200">
          <div class="grid grid-cols-2 px-4 py-3">
            <span class="text-sm text-gray-600">Monthly</span>
            <span class="text-sm font-medium">100,000</span>
          </div>
          <div class="grid grid-cols-2 px-4 py-3">
            <span class="text-sm text-gray-600">Subtotal</span>
            <span class="text-sm font-medium">100,000</span>
          </div>
          <div class="grid grid-cols-2 px-4 py-3">
            <span class="text-sm font-semibold text-gray-900">Total</span>
            <span class="text-sm font-semibold text-gray-900">100,000</span>
          </div>
        </div>
      </div>
  
      <!-- Related Orders -->
      <div>
        <h3 class="mb-4 text-lg font-semibold">Related Orders</h3>
        <div class="overflow-hidden rounded-lg border border-gray-200">
          <table class="w-full">
            <thead>
              <tr class="bg-purple-500 text-left text-sm font-medium text-white">
                <th class="px-4 py-2">Orders</th>
                <th class="px-4 py-2">Date</th>
                <th class="px-4 py-2">Status</th>
                <th class="px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="order in orders" :key="order.id" class="text-sm">
                <td class="px-4 py-3 font-medium">#{{ order.id }}</td>
                <td class="px-4 py-3 text-gray-600">{{ order.date }}</td>
                <td class="px-4 py-3">
                  <span class="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    {{ order.status }}
                  </span>
                </td>
                <td class="px-4 py-3">{{ formatCurrency(order.total) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const orders = [
    { id: '77345', date: 'Oct 1,2024', status: 'Completed', total: 100000 },
    { id: '77345', date: 'Oct 1,2024', status: 'Completed', total: 100000 },
    { id: '77345', date: 'Oct 1,2024', status: 'Completed', total: 100000 },
    { id: '77345', date: 'Oct 1,2024', status: 'Completed', total: 100000 }
  ]
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US').format(amount)
  }
  </script>