import type { Component } from 'vue'

export interface MenuItem {
  name: string
  icon: Component
  path: string
}

export interface User {
  id: string
  name: string
  avatar: string
  role: 'student' | 'teacher' | 'admin'
}