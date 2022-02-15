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
          <router-link :to="{ name: 'home' }" class="me-5">
            <img class="img-contain" src="@/assets/images/logo.png" alt="" />
          </router-link>
          <b-dropdown
            right
            no-caret
            variant="light rounded-pill border"
            menu-class="w-100 minw-unset bg-dark-shade border mt-1"
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
import { ILanguage } from '@/models'
import i18n from '@/lang'
import { getModule } from 'vuex-module-decorators'
import store from '@/store'
import Language from '@/store/modules/Language'

const LanguageModule = getModule(Language, store)

@Component({
  components: {
    MobileSidebar
  }
})
export default class Header extends Vue {
  private selectedLanguage = 'ENG'
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
    window.addEventListener('scroll', this.updateScroll)
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
}
</script>
