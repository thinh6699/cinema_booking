<template>
  <header
    :class="{
      'bg-dark': isOpen,
      'bg-dark-tint': scrollPosition > 0
    }"
    class="fixed-top border-bottom h--20"
  >
    <div class="container h-100">
      <div class="d-flex align-items-center justify-content-between px-1 h-100">
        <router-link class="h--10" :to="{ name: 'home' }">
          <img class="img-contain" src="../assets/images/logo.png" alt="" />
        </router-link>
        <div class="toggle-mobile-sidebar d-lg-none">
          <i
            v-b-toggle="'mobile-menu'"
            @click="isOpen = !isOpen"
            class="fs-30 text-white cursor-pointer fal"
            :class="isOpen ? 'fa-times' : 'fa-bars'"
          ></i>
          <MobileSidebar :isOpen="isOpen" @close-sidebar="isOpen = $event" />
        </div>
        <ul class="list-unstyled d-none align-items-center mb-0 d-lg-flex">
          <li>
            <router-link
              class="
                d-block
                text-light-shade
                fs-lg-18
                fwb-500
                text-uppercase
                py-4
                px-5
              "
              :to="{ name: 'all-films' }"
              >Films</router-link
            >
          </li>
          <li>
            <router-link
              class="
                d-block
                text-light-shade
                fs-lg-18
                fwb-500
                text-uppercase
                py-4
                px-5
              "
              :to="{ name: 'all-events' }"
              >Events</router-link
            >
          </li>
          <li>
            <router-link
              class="
                d-block
                text-light-shade
                fs-lg-18
                fwb-500
                text-uppercase
                py-4
                px-5
              "
              :to="{ name: 'film-blog', params: 'film-blog' }"
              >Blog</router-link
            >
          </li>
          <li>
            <router-link
              class="
                d-block
                text-light-shade
                fs-lg-18
                fwb-500
                text-uppercase
                py-4
                px-5
              "
              :to="{ name: 'about-us' }"
              >About Us</router-link
            >
          </li>
          <li class="me-5">
            <router-link
              class="
                d-block
                text-light-shade
                fs-lg-18
                fwb-500
                text-uppercase
                py-4
                px-5
              "
              :to="{ name: 'contact' }"
              >Contact</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'sign-up' }"
              class="btn btn-auth h-unset shadow-none py-4 px-11"
              >join us</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MobileSidebar from '@/components/MobileSidebar.vue'

@Component({
  components: {
    MobileSidebar
  }
})
export default class Header extends Vue {
  public isOpen: boolean = false
  public scrollPosition: any = null

  updateScroll() {
    this.scrollPosition = window.scrollY
  }

  created() {
    window.addEventListener('scroll', this.updateScroll)
  }
}
</script>
