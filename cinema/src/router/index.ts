import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import LayoutAuth from '@/layouts/LayoutAuth.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true,
      layout: LayoutDefault,
      hasBanner: true,
      title: 'Home'
    }
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import('@/views/Auth/SignUp.vue'),
    meta: {
      requiresAuth: false,
      layout: LayoutAuth,
      title: 'Sign Up'
    }
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('@/views/Auth/SignIn.vue'),
    meta: {
      requiresAuth: false,
      layout: LayoutAuth,
      title: 'Sign In'
    }
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('@/views/Auth/ForgotPassword.vue'),
    meta: {
      requiresAuth: false,
      layout: LayoutAuth,
      title: 'Forgot Password'
    }
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('@/views/Auth/ResetPassword.vue'),
    meta: {
      requiresAuth: false,
      layout: LayoutAuth,
      title: 'Reset Password'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/Contact.vue'),
    meta: {
      requiresAuth: true,
      layout: LayoutDefault,
      hasBanner: true,
      title: 'Contact'
    }
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: () => import('@/views/AboutUs.vue'),
    meta: {
      requiresAuth: true,
      layout: LayoutDefault,
      hasBanner: true,
      title: 'About Us'
    }
  },
  {
    path: '/blogs',
    component: LayoutDefault,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '/blogs',
        name: 'blogs',
        component: () => import('@/views/Blog/AllBlog.vue'),
        meta: {
          hasBanner: true,
          title: 'Blogs',
          requiresAuth: true,
        },
      },
      {
        path: ':blogId/detail',
        name: 'blog-detail',
        component: () => import('@/views/Blog/BlogDetail.vue'),
        meta: {
          hasBanner: true,
          title: 'Blog Detail',
          requiresAuth: true,
        },
      },
    ]
  },
  {
    path: '/movies',
    component: LayoutDefault,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '/movies',
        name: 'movies',
        component: () => import('@/views/Movies/AllMovies.vue'),
        meta: {
          requiresAuth: true,
          hasBanner: true,
          title: 'Movies'
        },
      },
      {
        path: ':movieId/detail',
        name: 'movie-detail',
        component: () => import('@/views/Movies/MovieDetail.vue'),
        meta: {
          hasBanner: true,
          requiresAuth: true,
          title: 'Movie Detail'
        },
      },
    ]
  },
  {
    path: '/events',
    component: LayoutDefault,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '/events',
        name: 'events',
        component: () => import('@/views/Events/AllEvents.vue'),
        meta: {
          requiresAuth: true,
          hasBanner: true,
          title: 'Events'
        },
      },
      {
        path: ':eventId/detail',
        name: 'event-detail',
        component: () => import('@/views/Events/EventDetail.vue'),
        meta: {
          requiresAuth: true,
          hasBanner: true,
          title: 'Event Detail'
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
      title: 'Ticket Plan'
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
      title: 'Seat Plan'
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
      title: 'Movie Food'
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
      title: 'Ticket Checkout'
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
      title: 'Setting'
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
      title: 'Booking History'
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
      title: 'Page Not Found'
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
  document.title = 'Booking Cinema Online'
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
