<template>
  <b-sidebar no-header id="mobile-menu" shadow>
    <div class="p-4">
      <ul class="list-unstyled">
        <li>
          <router-link
            class="
              d-block
              fs-18
              text-light-shade text-uppercase
              p-4
              border-bottom border-white-o1
            "
            :to="{ name: 'home' }"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            class="
              d-block
              fs-18
              text-light-shade text-uppercase
              p-4
              border-bottom border-white-o1
            "
            :to="{ name: 'all-films' }"
            >Films</router-link
          >
        </li>
        <li>
          <router-link
            class="
              d-block
              fs-18
              text-light-shade text-uppercase
              p-4
              border-bottom border-white-o1
            "
            :to="{ name: 'all-events' }"
            >Events</router-link
          >
        </li>
        <li>
          <router-link
            class="
              d-block
              fs-18
              text-light-shade text-uppercase
              p-4
              border-bottom border-white-o1
            "
            :to="{ name: 'film-blog', params: 'film-blog' }"
            >Blog</router-link
          >
        </li>
        <li>
          <router-link
            class="
              d-block
              fs-18
              text-light-shade text-uppercase
              p-4
              border-bottom border-white-o1
            "
            :to="{ name: 'about-us' }"
            >About Us</router-link
          >
        </li>
        <li class="mb-4">
          <router-link
            class="
              d-block
              fs-18
              text-light-shade text-uppercase
              p-4
              border-bottom border-white-o1
            "
            :to="{ name: 'contact' }"
            >Contact</router-link
          >
        </li>
        <li class="mw--40">
          <button
            @click="goToSignUp"
            class="
              btn btn-auth
              w-100
              h--14
              rounded-pill
              text-uppercase
              shadow-none
              border-0
            "
          >
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
  function(newVal: any) {
    if (newVal) {
      let closeSidebar = !this.isOpen
      this.$emit('close-sidebar', closeSidebar)
    } else {
      return null
    }
  }

  goToSignUp() {
    this.$router.push('sign-up')
  }
}
</script>
