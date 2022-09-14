import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import LayoutAuth from '@/layouts/LayoutAuth.vue'
import store from '@/store'
import i18n from '@/lang'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: false,
      layout: LayoutDefault,
      hasBanner: true,
      title: i18n.t('page.home')
    }
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import('@/views/Auth/SignUp.vue'),
    meta: {
      requiresAuth: false,
      layout: LayoutAuth,
      title: i18n.t('page.sign_up')
    }
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('@/views/Auth/SignIn.vue'),
    meta: {
      requiresAuth: false,
      layout: LayoutAuth,
      title: i18n.t('page.sign_in')
    }
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('@/views/Auth/ForgotPassword.vue'),
    meta: {
      requiresAuth: false,
      layout: LayoutAuth,
      title: i18n.t('page.forgot_password')
    }
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('@/views/Auth/ResetPassword.vue'),
    meta: {
      requiresAuth: false,
      layout: LayoutAuth,
      title: i18n.t('page.reset_password')
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/Contact.vue'),
    meta: {
      requiresAuth: false,
      layout: LayoutDefault,
      hasBanner: true,
      title: i18n.t('page.contact')
    }
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: () => import('@/views/AboutUs.vue'),
    meta: {
      requiresAuth: false,
      layout: LayoutDefault,
      hasBanner: true,
      title: i18n.t('page.about_us')
    }
  },
  {
    path: '/blogs',
    component: LayoutDefault,
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: '/blogs',
        name: 'blogs',
        component: () => import('@/views/Blog/AllBlog.vue'),
        meta: {
          hasBanner: false,
          title: i18n.t('page.blog'),
          requiresAuth: true,
        },
      },
      {
        path: ':blogId/detail',
        name: 'blog-detail',
        component: () => import('@/views/Blog/BlogDetail.vue'),
        meta: {
          hasBanner: false,
          title: i18n.t('page.blog_detail'),
          requiresAuth: true,
        },
      },
    ]
  },
  {
    path: '/movies',
    component: LayoutDefault,
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: '/movies',
        name: 'movies',
        component: () => import('@/views/Movies/AllMovies.vue'),
        meta: {
          requiresAuth: false,
          hasBanner: true,
          title: i18n.t('page.movies'),
        },
      },
      {
        path: ':movieId/detail',
        name: 'movie-detail',
        component: () => import('@/views/Movies/MovieDetail.vue'),
        meta: {
          hasBanner: true,
          requiresAuth: false,
          title: i18n.t('page.movie_detail'),
        },
      },
    ]
  },
  {
    path: '/events',
    component: LayoutDefault,
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: '/events',
        name: 'events',
        component: () => import('@/views/Events/AllEvents.vue'),
        meta: {
          requiresAuth: false,
          hasBanner: true,
          title: i18n.t('page.events'),
        },
      },
      {
        path: ':eventId/detail',
        name: 'event-detail',
        component: () => import('@/views/Events/EventDetail.vue'),
        meta: {
          requiresAuth: false,
          hasBanner: true,
          title: i18n.t('page.event_detail'),
        },
      },
    ]
  },
  {
    path: '/ticket-plan',
    name: 'ticket-plan',
    component: () => import('@/views/Booking/TicketPlan.vue'),
    meta: {
      requiresAuth: true,
      layout: LayoutDefault,
      hasBanner: true,
      title: i18n.t('page.ticket_plan'),
    }
  },
  {
    path: '/seat-plan',
    name: 'seat-plan',
    component: () => import('@/views/Booking/SeatPlan.vue'),
    meta: {
      requiresAuth: true,
      layout: LayoutDefault,
      hasBanner: true,
      title: i18n.t('page.seat_plan'),
    }
  },
  {
    path: '/movie-food',
    name: 'movie-food',
    component: () => import('@/views/Booking/MovieFood.vue'),
    meta: {
      requiresAuth: true,
      layout: LayoutDefault,
      hasBanner: true,
      title: i18n.t('page.movie_food'),
    }
  },
  {
    path: '/ticket-checkout',
    name: 'ticket-checkout',
    component: () => import('@/views/Booking/TicketCheckout.vue'),
    meta: {
      requiresAuth: true,
      layout: LayoutDefault,
      hasBanner: true,
      title: i18n.t('page.ticket_checkout'),
    }
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('@/views/AccountInfo/Setting.vue'),
    meta: {
      requiresAuth: true,
      layout: LayoutDefault,
      hasBanner: true,
      title: i18n.t('page.setting'),
    }
  },
  {
    path: '/booking-history',
    name: 'booking-history',
    component: () => import('@/views/AccountInfo/BookingHistory.vue'),
    meta: {
      requiresAuth: true,
      layout: LayoutDefault,
      hasBanner: true,
      title: i18n.t('page.booking_history'),
    }
  },
  {
    path: '*',
    name: 'page-not-found',
    component: () => import('@/views/PageNotFound.vue'),
    meta: {
      requiresAuth: true,
      layout: LayoutDefault,
      hasBanner: true,
      title: i18n.t('page.page_not_found'),
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

router.beforeEach((to, from, next) => {
  const token = store.state.auth.token
  if (to.matched.some(record => record.meta.requiresAuth) && !token) {
    next({
      path: '/sign-in',
      query: { redirect: to.fullPath }
    })
    return
  }
  next()
})

router.afterEach((to: any, from: any) => {
  document.title = to.meta.title
})



export default router
