import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'),
    meta: { title: 'Home Page' }
  },
  {
    path: '/measurements',
    name: 'Measurements',
    component: () => import('@/views/Measurements'),
    meta: { title: 'Measurements' }
  },
  {
    path: '/bioaccumulations',
    name: 'Bioaccumulations',
    component: () => import('@/views/Bioaccumulations'),
    meta: { title: 'Bioaccumulations' }
  },
  {
    path: '/trends',
    name: 'Trends',
    component: () => import('@/views/Trends'),
    meta: { title: 'Trends' }
  },
  {
    path: '/risks',
    name: 'Risks',
    component: () => import('@/views/Risks'),
    meta: { title: 'Risks' }
  },
  {
    path: '/group',
    name: 'Group',
    component: () => import('@/views/Group'),
    meta: { title: 'Group' }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
