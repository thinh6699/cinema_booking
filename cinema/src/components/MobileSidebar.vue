<template>
  <b-sidebar no-header id="mobile-menu" shadow>
    <div class="p-4">
      <ul class="list-unstyled mb-0">
        <li>
          <router-link
            class="d-block text-light-shade text-uppercase p-4 border-bottom border-white-o2"
            :to="{ name: 'all-films' }"
            >Films</router-link
          >
        </li>
        <li>
          <router-link
            class="d-block text-light-shade text-uppercase p-4 border-bottom border-white-o2"
            :to="{ name: 'all-events' }"
            >Events</router-link
          >
        </li>
        <li>
          <router-link
            class="d-block text-light-shade text-uppercase p-4 border-bottom border-white-o2"
            :to="{ name: 'film-blog', params: 'film-blog' }"
            >Blog</router-link
          >
        </li>
        <li>
          <router-link
            class="d-block text-light-shade text-uppercase p-4 border-bottom border-white-o2"
            :to="{ name: 'about-us' }"
            >About Us</router-link
          >
        </li>
        <li class="mb-4">
          <router-link
            class="d-block text-light-shade text-uppercase p-4 border-bottom border-white-o2"
            :to="{ name: 'contact' }"
            >Contact</router-link
          >
        </li>
        <li class="mw--40">
          <button @click="goToSignUp" class="btn btn-gradient shadow-none">
            join us
          </button>
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
