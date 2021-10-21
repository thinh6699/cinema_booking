import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LayoutAuth from '@/layouts/LayoutAuth.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('@/views/Auth/SignIn.vue'),
    meta: {
      layout: LayoutAuth
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
