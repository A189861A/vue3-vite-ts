import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/CompilerMacros',
      name: 'CompilerMacros',
      component: () => import('../views/CompilerMacros.vue')
    },
    {
      path: '/NamespaceView',
      name: 'NamespaceView',
      component: () => import('../views/NamespaceView.vue')
    },
    {
      path: '/DefineDirectiveView',
      name: 'DefineDirectiveView',
      component: () => import('../views/DefineDirectiveView.vue')
    },
    {
      path: '/DefineDirectiveView1',
      name: 'DefineDirectiveView1',
      component: () => import('../views/DefineDirectiveView1.vue')
    }
  ]
})

export default router
