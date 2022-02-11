<template>
  <header
    :class="{
      'bg-dark': isOpen,
      'bg-dark-tint': scrollPosition > 0
    }"
    class="fixed-top border-bottom h--20"
  >
    <div class="container h-100">
      <div
        class="d-flex align-items-center justify-content-between px-2 px-lg-0 h-100"
      >
        <router-link :to="{ name: 'home' }">
          <img class="img-contain" src="@/assets/images/logo.png" alt="" />
        </router-link>
        <div class="toggle-mobile-sidebar d-lg-none cursor-pointer p-4 m-n4">
          <i
            v-b-toggle="'mobile-menu'"
            @click="isOpen = !isOpen"
            class="fs-30 text-white fal"
            :class="isOpen ? 'fa-times' : 'fa-bars'"
          ></i>
          <MobileSidebar :isOpen="isOpen" @update-state="updateState" />
        </div>
        <ul
          class="list-unstyled d-none align-items-center mb-0 d-lg-flex h-100"
        >
          <li v-for="(menu, index) in headerMenu" :key="index" class="h-100">
            <router-link
              class="w--22 flex-center h-100 text-light-shade fs-lg-17 fwb-500 text-center text-uppercase py-4 mx-3"
              :class="$route.path.includes(menu.link) ? 'nav-active' : ''"
              :to="{ name: menu.link }"
              >{{ menu.name }}</router-link
            >
          </li>

          <li class="ms-3">
            <router-link
              :to="{ name: 'sign-up' }"
              class="btn btn-gradient h-unset py-4 px-11"
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
  public scrollPosition: number = 0
  public headerMenu: any[] = [
    {
      name: 'Movies',
      link: 'movies'
    },
    {
      name: 'Events',
      link: 'events'
    },
    {
      name: 'Blog',
      link: 'blogs'
    },
    {
      name: 'About Us',
      link: 'about-us'
    },
    {
      name: 'Contact',
      link: 'contact'
    }
  ]

  created(): void {
    window.addEventListener('scroll', this.updateScroll)
  }

  updateScroll(): void {
    this.scrollPosition = window.scrollY
  }

  updateState(isOpen: boolean): void {
    this.isOpen = isOpen
  }
}
</script>
