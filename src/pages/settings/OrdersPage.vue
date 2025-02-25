<template>
    <div>
      <h2 class="mb-6 text-xl font-semibold">Orders</h2>
      <div class="overflow-hidden rounded-lg border border-gray-200">
        <table class="w-full">
          <thead>
            <tr class="bg-purple-500 text-left text-sm font-medium text-white">
              <th class="px-6 py-3">Orders</th>
              <th class="px-6 py-3">Date</th>
              <th class="px-6 py-3">Status</th>
              <th class="px-6 py-3">Total</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="order in orders" :key="order.id" class="text-sm">
              <td class="px-6 py-4 font-medium text-gray-900">#{{ order.id }}</td>
              <td class="px-6 py-4 text-gray-600">{{ order.date }}</td>
              <td class="px-6 py-4">
                <span class="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800">
                  {{ order.status }}
                </span>
              </td>
              <td class="px-6 py-4 text-gray-900">{{ formatCurrency(order.total) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const orders = [
    { id: '77345', date: 'Oct 1,2024', status: 'Completed', total: 100000 },
    { id: '77345', date: 'Oct 1,2024', status: 'Completed', total: 100000 },
    // Add more orders as needed
  ]
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US').format(amount)
  }
  </script>