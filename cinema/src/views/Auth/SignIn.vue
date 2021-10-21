<template>
  <div class="d-flex flex-column min-h-screen">
    <header class="fixed-top bg-secondary-tint px-4 px-xl-7">
      <div class="d-flex justify-content-between align-items-center h--10">
        <router-link class="fs-20 fwb-500" :to="{ name: 'home' }"
          >EC HUB</router-link
        >
        <div class="d-block">
          <button
            class="
              fs-12
              w--25
              minh--7
              btn btn-info-shade
              rounded-pill
              py-1
              shadow-none
              me-2
            "
          >
            ログアウト
          </button>
          <b-dropdown right no-caret menu-class="mh--100 overflow-auto">
            <template #button-content>
              <div
                class="
                  flex-center
                  w--20
                  minh--7
                  text-normal
                  position-relative
                  bg-white
                  rounded-pill
                "
              >
                <span class="pe-4">JPN</span>
                <i
                  class="
                    fas
                    fa-chevron-down
                    position-absolute
                    top-50
                    end--1
                    translate-middle-y
                    px-2
                  "
                ></i>
              </div>
            </template>
            <b-dropdown-item
              v-for="i in 2"
              :key="i"
              variant="normal"
              class="fs-12 fs-xl-15"
            >
              <span>JPN</span>
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </header>
    <main class="flex-1 mt-10">
      <div class="container">
        <div class="login_form mw--90 mx-auto">
          <div class="flex-center flex-column fwb-500 pt-25 mb-12">
            <router-link class="fs-20 mb-19" :to="{ name: 'home' }"
              >EC HUB</router-link
            >
            <span
              class="
                fs-16
                fwb
                text-center
                border-bottom border-info-shade border-2
                px-2
                pb-1
              "
              >BRAND</span
            >
          </div>
          <div class="form-group mb-7">
            <label class="fs-14 fwb-500 w-100 mb-3" for="email">
              Enter username or email address
            </label>
            <input
              id="email"
              class="w-100 h--8 border-0 border-bottom outline-0"
              type="email"
            />
          </div>
          <div class="form-group mb-1">
            <label class="fs-14 fwb-500 w-100 mb-3" for="password">
              Password
            </label>
            <input
              id="password"
              class="w-100 h--8 border-0 border-bottom outline-0"
              type="password"
            />
          </div>
          <p class="d-flex justify-content-end m-0 mb-8">Show</p>
          <div class="flex-center mb-5">
            <button
              class="
                fs-12
                w--33
                minh--9
                btn btn-info-shade
                rounded-pill
                shadow-none
              "
            >
              ログイン
            </button>
          </div>
          <div class="flex-center mb-20">
            <router-link
              class="text-info-shade pb-1 border-bottom border-info-shade"
              :to="{ name: 'forgot-password' }"
              >Forgot Password?</router-link
            >
          </div>
        </div>
      </div>
    </main>
    <footer></footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class SignIn extends Vue {
  goToHome() {
    this.$router.push({ name: '/' })
  }
}
</script>
