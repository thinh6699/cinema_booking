<template>
  <div class="login">
    <div class="text-center fwb-500 pt-25 mb-12">
      <router-link class="fs-20 mb-19 d-block" :to="{ name: 'home' }"
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

    <div class="mw--90 mx-auto">
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
          :type="isShow ? 'text' : 'password'"
        />
      </div>
      <p
        @click="togglePassword"
        class="d-flex justify-content-end m-0 mb-8 cursor-pointer"
      >
        {{ isShow ? 'Hide' : 'Show' }}
      </p>
      <div class="text-center mb-5">
        <button
          class="fs-12 minw--33 btn btn-info-shade rounded-pill shadow-none"
        >
          ログイン
        </button>
      </div>
      <div class="text-center mb-20">
        <router-link
          class="text-info-shade pb-1 border-bottom border-info-shade"
          :to="{ name: 'todo' }"
          >Forgot Password?</router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class SignIn extends Vue {
  private isShow: boolean = false

  togglePassword() {
    this.isShow = !this.isShow
  }
}
</script>
