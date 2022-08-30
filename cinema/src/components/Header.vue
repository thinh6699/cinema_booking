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
        <div class="d-flex align-items-center">
          <div @click="goToHome" class="me-5 cursor-pointer">
            <img class="img-contain" src="@/assets/images/logo.png" alt="" />
          </div>
          <b-dropdown
            right
            no-caret
            variant="light rounded-pill border"
            menu-class="w-100 minw-unset bg-dark-shade border mt-1 z-2000"
          >
            <template #button-content>
              <div class="flex-center w--15 minh--5 position-relative px-2">
                <span class="pe-5 text-white">{{ selectedLanguage }}</span>
                <i
                  class="fas fa-chevron-down fs-14 position-absolute top-50 end--n1 translate-middle-y px-2 text-white"
                />
              </div>
            </template>
            <b-dropdown-item
              v-for="language in listLangauge"
              :key="language.code"
              class="fs-15"
              @click="changeLanguage(language)"
            >
              <span class="d-inline-block text-white py-1">{{
                language.text
              }}</span>
            </b-dropdown-item>
          </b-dropdown>
        </div>
        <div class="toggle-mobile-sidebar d-lg-none">
          <i
            v-b-toggle="'mobile-menu'"
            @click="toggleMenu"
            class="fs-30 text-white fal p-4 m-n4 cursor-pointer"
            :class="isOpen ? 'fa-times' : 'fa-bars'"
          ></i>
          <MobileSidebar :isOpen="isOpen" @update-state="updateState" />
        </div>
        <ul
          class="list-unstyled d-none align-items-center mb-0 d-lg-flex h-100"
        >
          <li v-for="(menu, index) in headerMenu" :key="index" class="h-100">
            <router-link
              class="flex-center h-100 text-light-shade fs-lg-17 fwb-500 text-center text-uppercase py-4 mx-2"
              :class="[
                $route.path.includes(menu.link) ? 'nav-active' : '',
                menu.link === 'about-us' ? 'w--30' : 'w--22'
              ]"
              :to="{ name: menu.link }"
              >{{ $t(menu.name) }}</router-link
            >
          </li>

          <li v-if="!$store.state.auth.token" class="ms-3">
            <router-link
              :to="{ name: 'sign-up' }"
              class="btn btn-gradient text-nowrap h-unset py-4 px-8"
              >{{ $t('header.join_us') }}</router-link
            >
          </li>

          <li v-else class="ms-3">
            <button
              @click="isShowAvaOption = !isShowAvaOption"
              @blur="isShowAvaOption = false"
              class="bg-transparent text-light-shade border-0 flex-center position-relative py-4 my-n4"
            >
              <div class="w--13 h--13 rounded-circle me-2">
                <img
                  class="img-cover rounded-circle"
                  src="@/assets/images/avatar_default.png"
                  alt="Avatar"
                />
              </div>
              <span class="text-nowrap">Thịnh Nguyễn</span>
              <ul
                v-if="isShowAvaOption"
                class="list-unstyled bg-dark-shade position-absolute border rounded start--0 end--0 top--19 py-3 shadow-lg"
              >
                <li
                  @click="goToBookingHistory"
                  class="text-nowrap py-3 px-5 cursor-pointer avatar-option"
                >
                  {{ $t('common.booking_history') }}
                </li>
                <li
                  @click="goToSetting"
                  class="text-nowrap py-3 px-5 cursor-pointer avatar-option"
                >
                  {{ $t('common.setting') }}
                </li>
                <li
                  @click="logout"
                  class="text-nowrap py-3 px-5 cursor-pointer avatar-option"
                >
                  {{ $t('common.logout') }}
                </li>
              </ul>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MobileSidebar from '@/components/MobileSidebar.vue'
import { ILanguage } from '@/models'
import i18n from '@/lang'
import { getModule } from 'vuex-module-decorators'
import store from '@/store'
import Language from '@/store/modules/Language'
import Auth from '@/store/modules/Auth'

const LanguageModule = getModule(Language, store)
const AuthModule = getModule(Auth, store)

@Component({
  components: {
    MobileSidebar
  }
})
export default class Header extends Vue {
  private selectedLanguage = 'ENG'
  private isShowAvaOption: boolean = false
  public isOpen: boolean = false
  public scrollPosition: number = 0
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

  public listLangauge: any[] = [
    {
      code: 'en',
      text: 'ENG'
    },
    {
      code: 'vn',
      text: 'VN'
    }
  ]

  created(): void {
    if (this.$store.state.language.code) {
      this.selectedLanguage = this.$store.state.language.text
    }
    window.addEventListener('scroll', this.updateScroll)
    window.addEventListener('resize', this.watchResize)
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen
    const body = document.body
    body.classList.toggle('overflow-hidden')
  }

  watchResize(): void {
    if (window.innerWidth < 992) {
      this.isShowAvaOption = false
    }
  }

  updateScroll(): void {
    this.scrollPosition = window.scrollY
  }

  updateState(isOpen: boolean): void {
    this.isOpen = isOpen
  }

  changeLanguage(language: ILanguage): void {
    i18n.locale = language.code
    this.selectedLanguage = language.text
    LanguageModule.SET_LANGUAGE(language)
  }

  goToHome(): void {
    if (this.$route.name === 'home') {
      this.isOpen = false
    } else {
      this.$router.push({ name: 'home' })
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
