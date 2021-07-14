<template>
  <b-sidebar no-header id="mobile-menu" shadow>
    <div class="p-4">
      <ul class="list-unstyled">
        <li @click="closeSidebar">
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
        <li @click="closeSidebar">
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
        <li @click="closeSidebar">
          <router-link
            class="
              d-block
              fs-18
              text-light-shade text-uppercase
              p-4
              border-bottom border-white-o1
            "
            :to="{ name: 'film-blog' }"
            >Blog</router-link
          >
        </li>
        <li @click="closeSidebar">
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
        <li @click="closeSidebar" class="mb-4">
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
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class MobileSidebar extends Vue {
  @Prop() public isOpen!: boolean

  closeSidebar() {
    let newVal = !this.isOpen
    this.$emit('close-sidebar', newVal)
  }

  goToSignUp() {
    this.$router.push('sign-up')
  }
}
</script>
