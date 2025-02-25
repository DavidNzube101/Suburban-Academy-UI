<template>
    <TransitionRoot appear :show="show" as="template">
      <Dialog as="div" @close="$emit('update:show', false)" class="relative z-50">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>
  
        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel class="w-full max-w-md overflow-hidden rounded-xl bg-white">
                <div class="p-6">
                  <div class="mb-4 flex items-center gap-4">
                    <div 
                      :class="[
                        'rounded-full p-2',
                        typeClasses[type].bg
                      ]"
                    >
                      <component 
                        :is="typeClasses[type].icon" 
                        class="h-6 w-6"
                        :class="typeClasses[type].iconColor"
                      />
                    </div>
                    <DialogTitle as="h3" class="text-lg font-semibold">
                      {{ title }}
                    </DialogTitle>
                  </div>
  
                  <div class="text-sm text-gray-600">
                    <slot />
                  </div>
                </div>
  
                <div class="border-t border-gray-200 bg-gray-50 p-4">
                  <slot name="footer">
                    <button
                      @click="$emit('update:show', false)"
                      class="w-full rounded-lg bg-gray-900 py-2 text-sm font-medium text-white hover:bg-gray-800"
                    >
                      Close
                    </button>
                  </slot>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>
  
  <script setup lang="ts">
  import { Dialog, DialogPanel, DialogTitle, TransitionRoot, TransitionChild } from '@headlessui/vue'
  import { CheckCircle, XCircle, AlertCircle, Info } from 'lucide-vue-next'
  
  withDefaults(defineProps<{
    show: boolean
    title: string
    type?: 'success' | 'error' | 'warning' | 'info'
  }>(), {
    type: 'info'
  })


  
  defineEmits<{
    'update:show': [value: boolean]
  }>()
  
  const typeClasses = {
    success: {
      bg: 'bg-green-100',
      iconColor: 'text-green-500',
      icon: CheckCircle
    },
    error: {
      bg: 'bg-red-100',
      iconColor: 'text-red-500',
      icon: XCircle
    },
    warning: {
      bg: 'bg-yellow-100',
      iconColor: 'text-yellow-500',
      icon: AlertCircle
    },
    info: {
      bg: 'bg-blue-100',
      iconColor: 'text-blue-500',
      icon: Info
    }
  }
  </script>