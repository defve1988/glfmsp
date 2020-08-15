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
    path: '/chemicals',
    name: 'Chemicals',
    component: () => import('@/views/Chemicals'),
    meta: { title: 'Chemicals' }
  },
  {
    path: '/data_viz',
    name: 'DataViz',
    component: () => import('@/views/DataViz'),
    meta: { title: 'DataViz' }
  },
  {
    path: '/tools',
    name: 'Tools',
    component: () => import('@/views/Tools'),
    meta: { title: 'Tools' }
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
