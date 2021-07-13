import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import LayoutAuth from '@/layouts/LayoutAuth.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      layout: LayoutDefault
    }
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import('@/views/Auth/SignUp.vue'),
    meta: {
      layout: LayoutAuth
    }
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('@/views/Auth/SignIn.vue'),
    meta: {
      layout: LayoutAuth
    }
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('@/views/Auth/ForgotPassword.vue'),
    meta: {
      layout: LayoutAuth
    }
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('@/views/Auth/ResetPassword.vue'),
    meta: {
      layout: LayoutAuth
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/Contact.vue'),
    meta: {
      LayoutDefault
    }
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: () => import('../views/AboutUs.vue'),
    meta: {
      LayoutDefault
    }
  },
  {
    path: '/film-blog',
    name: 'film-blog',
    component: () => import('@/views/Blog/FilmBlog.vue'),
    meta: {
      LayoutDefault
    },
  },
  {
    path: '/blog-detail/:blogId',
    name: 'blog-detail',
    component: () => import('@/views/Blog/FilmBlogDetail.vue'),
    meta: {
      LayoutDefault
    },
  },
  {
    path: '/all-films',
    name: 'all-films',
    component: () => import('@/views/Films/AllFilms.vue'),
    meta: {
      LayoutDefault
    },
  },
  {
    path: 'film-detail/:filmId',
    name: 'film-detail',
    component: () => import('@/views/Films/FilmDetail.vue'),
    meta: {
      LayoutDefault
    },
  },
  {
    path: '/all-events',
    name: 'all-events',
    component: () => import('@/views/Events/AllEvents.vue'),
    meta: {
      LayoutDefault
    },
  },
  {
    path: 'event-detail/:eventId',
    name: 'event-detail',
    component: () => import('@/views/Events/EventDetail.vue'),
    meta: {
      LayoutDefault
    },
  },
  {
    path: '/ticket-plan',
    name: 'ticket-plan',
    component: () => import('@/views/Booking/TicketPlan.vue'),
    meta: {
      LayoutDefault
    }
  },
  {
    path: '/seat-plan',
    name: 'seat-plan',
    component: () => import('@/views/Booking/SeatPlan.vue'),
    meta: {
      LayoutDefault
    }
  },
  {
    path: '/ticket-checkout',
    name: 'ticket-checkout',
    component: () => import('@/views/Booking/TicketCheckout.vue'),
    meta: {
      LayoutDefault
    }
  },
  {
    path: '/user-manage',
    name: 'user-manage',
    component: () => import('@/views/Manage/UserManage.vue'),
    meta: {
      LayoutDefault
    }
  },
  {
    path: '/film-manage',
    name: 'film-manage',
    component: () => import('@/views/Manage/FilmManage.vue'),
    meta: {
      LayoutDefault
    }
  },
  {
    path: '*',
    name: 'page-not-found',
    component: () => import('@/views/PageNotFound.vue'),
    meta: {
      LayoutDefault
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
