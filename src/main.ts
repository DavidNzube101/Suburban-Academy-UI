import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router' // Auto-resolves index.ts
import './assets/style.css'

createApp(App)
  .use(router)
  .mount('#app')