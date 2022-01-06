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
    path: '/blogs',
    redirect: '/blogs',
    component: LayoutDefault,
    children: [
      {
        path: '',
        name: 'blogs',
        component: () => import('@/views/Blog/FilmBlog.vue'),
        meta: {
          hasBanner: true
        },
      },
      {
        path: ':blogId/detail',
        name: 'blog-detail',
        component: () => import('@/views/Blog/FilmBlogDetail.vue'),
        meta: {
          hasBanner: true
        },
      },
    ]
  },
  {
    path: '/movies',
    redirect: '/movies',
    component: LayoutDefault,
    children: [
      {
        path: '',
        name: 'movies',
        component: () => import('@/views/Films/AllFilms.vue'),
        meta: {
          hasBanner: true
        },
      },
      {
        path: ':movieId/detail',
        name: 'movie-detail',
        component: () => import('@/views/Films/FilmDetail.vue'),
        meta: {
          hasBanner: true
        },
      },
    ]
  },
  {
    path: '/events',
    redirect: '/events',
    component: LayoutDefault,
    children: [
      {
        path: '',
        name: 'events',
        component: () => import('@/views/Events/AllEvents.vue'),
        meta: {
          hasBanner: true
        },
      },
      {
        path: ':eventId/detail',
        name: 'event-detail',
        component: () => import('@/views/Events/EventDetail.vue'),
        meta: {
          hasBanner: true
        },
      },
    ]
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
