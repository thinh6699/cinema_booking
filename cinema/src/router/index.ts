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
      layout: LayoutDefault,
      hasBanner: true
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
      layout: LayoutDefault,
      hasBanner: true
    }
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: () => import('@/views/AboutUs.vue'),
    meta: {
      layout: LayoutDefault,
      hasBanner: true
    }
  },
  {
    path: '/film-blog',
    name: 'film-blog',
    component: () => import('@/views/Blog/FilmBlog.vue'),
    meta: {
      layout: LayoutDefault,
      hasBanner: true
    },
  },
  {
    path: '/blog-detail/:blogId',
    name: 'blog-detail',
    component: () => import('@/views/Blog/FilmBlogDetail.vue'),
    meta: {
      layout: LayoutDefault,
      hasBanner: true
    },
  },
  {
    path: '/all-films',
    name: 'all-films',
    component: () => import('@/views/Films/AllFilms.vue'),
    meta: {
      layout: LayoutDefault,
      hasBanner: true
    },
  },
  {
    path: '/film-detail/:filmId',
    name: 'film-detail',
    component: () => import('@/views/Films/FilmDetail.vue'),
    meta: {
      layout: LayoutDefault,
      hasBanner: true
    },
  },
  {
    path: '/all-events',
    name: 'all-events',
    component: () => import('@/views/Events/AllEvents.vue'),
    meta: {
      layout: LayoutDefault,
      hasBanner: true
    },
  },
  {
    path: '/event-detail/:eventId',
    name: 'event-detail',
    component: () => import('@/views/Events/EventDetail.vue'),
    meta: {
      layout: LayoutDefault,
      hasBanner: true
    },
  },
  {
    path: '/ticket-plan',
    name: 'ticket-plan',
    component: () => import('@/views/Booking/TicketPlan.vue'),
    meta: {
      layout: LayoutDefault,
      hasBanner: true
    }
  },
  {
    path: '/seat-plan',
    name: 'seat-plan',
    component: () => import('@/views/Booking/SeatPlan.vue'),
    meta: {
      layout: LayoutDefault,
      hasBanner: true
    }
  },
  {
    path: '/ticket-checkout',
    name: 'ticket-checkout',
    component: () => import('@/views/Booking/TicketCheckout.vue'),
    meta: {
      layout: LayoutDefault,
      hasBanner: true
    }
  },
  {
    path: '/user-manage',
    name: 'user-manage',
    component: () => import('@/views/Manage/UserManage.vue'),
    meta: {
      layout: LayoutDefault,
      hasBanner: true
    }
  },
  {
    path: '/film-manage',
    name: 'film-manage',
    component: () => import('@/views/Manage/FilmManage.vue'),
    meta: {
      layout: LayoutDefault,
      hasBanner: true
    }
  },
  {
    path: '*',
    name: 'page-not-found',
    component: () => import('@/views/PageNotFound.vue'),
    meta: {
      layout: LayoutDefault,
      hasBanner: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to: any, from: any, savedPosition: any) {
    // savedPosition is only available for popstate navigations.
    if (savedPosition) return savedPosition

    //prevent scroll when router change in same page
    if (to.name === from.name) return {}

    // scroll to anchor by returning the selector
    if (to.hash) {
      let position = { selector: to.hash }
      return position
    }

    // scroll to top by default
    return { x: 0, y: 0 }
  }
})

export default router
