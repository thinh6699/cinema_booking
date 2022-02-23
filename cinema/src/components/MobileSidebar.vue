<template>
  <b-sidebar v-if="isOpen" no-header id="mobile-menu" shadow>
    <div class="p-4">
      <div
        v-if="$store.state.auth.token"
        class="ms-4 w--25 h--25 rounded-circle me-2 my-4"
      >
        <img
          class="img-cover rounded-circle"
          src="@/assets/images/avatar_default.png"
          alt="Avatar"
        />
      </div>
      <div
        v-if="$store.state.auth.token"
        @click="goToBookingHistory"
        class="cursor-pointer text-light-shade text-uppercase p-4 pb-6 border-bottom border-white-o2"
      >
        {{ $t('common.booking_history') }}
      </div>
      <ul class="list-unstyled mb-0 border-bottom border-white-o2">
        <li v-for="(menu, index) in headerMenu" :key="index">
          <div
            class="cursor-pointer text-light-shade text-uppercase p-4"
            @click="goToDetail(menu)"
            :class="[
              index === 0 ? 'pt-6' : '',
              index === headerMenu.length - 1 ? 'pb-6' : ''
            ]"
          >
            {{ $t(menu.name) }}
          </div>
        </li>
      </ul>
      <ul v-if="$store.state.auth.token" class="list-unstyled mb-0">
        <li
          @click="goToSetting"
          class="cursor-pointer text-light-shade text-uppercase p-4 pt-6"
        >
          {{ $t('common.setting') }}
        </li>

        <li
          @click="logout"
          class="cursor-pointer text-light-shade text-uppercase p-4"
        >
          {{ $t('common.logout') }}
        </li>
      </ul>
      <div v-else class="mw--40 pt-6">
        <button @click="goToSignUp" class="btn btn-gradient">
          {{ $t('header.join_us') }}
        </button>
      </div>
    </div>
  </b-sidebar>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import Auth from '@/store/modules/Auth'
import { getModule } from 'vuex-module-decorators'
import store from '@/store'

const AuthModule = getModule(Auth, store)

@Component({})
export default class MobileSidebar extends Vue {
  @Prop() public isOpen!: boolean
  private isLogin: boolean = false
  public headerMenu: any[] = [
    {
      name: 'header.movies',
      link: 'movies'
    },
    {
      name: 'header.events',
      link: 'events'
    },
    {
      name: 'header.blog',
      link: 'blogs'
    },
    {
      name: 'header.about_us',
      link: 'about-us'
    },
    {
      name: 'header.contact',
      link: 'contact'
    }
  ]

  @Watch('$route.name')
  watchRouteChange(): void {
    let isOpen = this.isOpen
    isOpen = false
    this.$emit('update-state', isOpen)
  }

  created(): void {
    window.addEventListener('resize', this.watchResize)
  }

  watchResize(): void {
    if (window.innerWidth > 991) {
      let isOpen = this.isOpen
      isOpen = false
      this.$emit('update-state', isOpen)
    }
  }

  goToSignUp(): void {
    this.$router.push({ name: 'sign-up' })
  }

  goToDetail(menu: any): void {
    if (this.$route.name === menu.link) {
      let isOpen = this.isOpen
      isOpen = false
      this.$emit('update-state', isOpen)
    } else {
      this.$router.push({ name: menu.link })
    }
  }

  goToSetting(): void {
    this.$router.push({ name: 'setting' })
  }

  goToBookingHistory(): void {
    this.$router.push({ name: 'booking-history' })
  }

  logout(): void {
    AuthModule.SET_TOKEN_NULL()
    this.$router.push({ name: 'sign-in' })
    sessionStorage.clear()
    localStorage.clear()
  }
}
</script>
