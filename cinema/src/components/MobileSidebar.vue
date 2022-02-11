<template>
  <b-sidebar no-header id="mobile-menu" shadow>
    <div class="p-4">
      <ul class="list-unstyled mb-0">
        <li
          v-for="(menu, index) in headerMenu"
          :key="index"
          :class="index === headerMenu.length - 1 ? 'mb-4' : ''"
        >
          <router-link
            class="d-block text-light-shade text-uppercase p-4 border-bottom border-white-o2"
            :to="{ name: menu.link }"
            >{{ menu.name }}</router-link
          >
        </li>

        <li class="mw--40">
          <button @click="goToSignUp" class="btn btn-gradient">join us</button>
        </li>
      </ul>
    </div>
  </b-sidebar>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({})
export default class MobileSidebar extends Vue {
  @Prop() public isOpen!: boolean
  private headerMenu: any[] = [
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

  @Watch('$route.name')
  watchRouteChange(): void {
    let isOpen = this.isOpen
    isOpen = false
    this.$emit('update-state', isOpen)
  }

  goToSignUp(): void {
    this.$router.push({ name: 'sign-up' })
  }
}
</script>
