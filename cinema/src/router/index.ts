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
      hasBanner: true,
      title: 'Home'
    }
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import('@/views/Auth/SignUp.vue'),
    meta: {
      layout: LayoutAuth,
      title: 'Sign Up'
    }
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('@/views/Auth/SignIn.vue'),
    meta: {
      layout: LayoutAuth,
      title: 'Sign In'
    }
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('@/views/Auth/ForgotPassword.vue'),
    meta: {
      layout: LayoutAuth,
      title: 'Forgot Password'
    }
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('@/views/Auth/ResetPassword.vue'),
    meta: {
      layout: LayoutAuth,
      title: 'Reset Password'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/Contact.vue'),
    meta: {
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
      layout: LayoutDefault,
      hasBanner: true,
      title: 'About Us'
    }
  },
  {
    path: '/blogs',
    component: LayoutDefault,
    children: [
      {
        path: '/blogs',
        name: 'blogs',
        component: () => import('@/views/Blog/AllBlog.vue'),
        meta: {
          hasBanner: true,
          title: 'Blogs'
        },
      },
      {
        path: ':blogId/detail',
        name: 'blog-detail',
        component: () => import('@/views/Blog/BlogDetail.vue'),
        meta: {
          hasBanner: true,
          title: 'Blog Detail'
        },
      },
    ]
  },
  {
    path: '/movies',
    component: LayoutDefault,
    children: [
      {
        path: '/movies',
        name: 'movies',
        component: () => import('@/views/Movies/AllMovies.vue'),
        meta: {
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
          title: 'Movie Detail'
        },
      },
    ]
  },
  {
    path: '/events',
    component: LayoutDefault,
    children: [
      {
        path: '/events',
        name: 'events',
        component: () => import('@/views/Events/AllEvents.vue'),
        meta: {
          hasBanner: true,
          title: 'Events'
        },
      },
      {
        path: ':eventId/detail',
        name: 'event-detail',
        component: () => import('@/views/Events/EventDetail.vue'),
        meta: {
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
      layout: LayoutDefault,
      hasBanner: true,
      title: 'Ticket Checkout'
    }
  },
  {
    path: '*',
    name: 'page-not-found',
    component: () => import('@/views/PageNotFound.vue'),
    meta: {
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

router.afterEach((to: any, from: any) => {
  document.title = to.meta.title
})

export default router
