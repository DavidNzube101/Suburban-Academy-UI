import type { RouteLocationNormalized } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "main-layout" */ '../layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '../pages/DashboardPage.vue')
      },
      {
        path: 'webinars',
        children: [
          {
            path: '',
            name: 'webinars',
            component: () => import(/* webpackChunkName: "webinar-list" */ '../pages/webinar/WebinarListPage.vue')
          },
          {
            path: ':id',
            name: 'webinar-detail',
            component: () => import(/* webpackChunkName: "webinar-detail" */ '../pages/webinar/WebinarDetailPage.vue')
          },
          {
            path: 'register/:id',
            name: 'webinar-registration',
            component: () => import(/* webpackChunkName: "webinar-registration" */ '../pages/webinar/WebinarRegistrationPage.vue')
          }
        ]
      },
      {
        path: 'courses',
        name: 'courses',
        component: () => import(/* webpackChunkName: "courses" */ '../pages/CoursesPage.vue')
      },
      {
        path: 'teachers',
        name: 'teachers',
        component: () => import(/* webpackChunkName: "teachers" */ '../pages/TeachersPage.vue')
      },
      {
        path: 'messages',
        name: 'messages',
        component: () => import(/* webpackChunkName: "messages" */ '../pages/MessagesPage.vue')
      },
      {
        path: 'calendar',
        name: 'calendar',
        component: () => import(/* webpackChunkName: "calendar" */ '../pages/CalendarPage.vue')
      },
      {
        path: 'certificates',
        name: 'certificates',
        component: () => import(/* webpackChunkName: "certificates" */ '../pages/CertificatesPage.vue')
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import(/* webpackChunkName: "settings" */ '../pages/SettingsPage.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "auth" */ '../pages/auth/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "auth" */ '../pages/auth/RegisterPage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "not-found" */ '../pages/NotFoundPage.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation guard to check authentication
interface NavigationGuardNext {
  (to?: string | false | void | Error): void;
}


router.beforeEach((to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const publicPages: string[] = ['/login', '/register'];
  const authRequired: boolean = !publicPages.includes(to.path);
  const loggedIn: string | null = localStorage.getItem('auth_token');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
});