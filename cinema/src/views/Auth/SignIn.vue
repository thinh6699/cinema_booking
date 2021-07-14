<template>
  <div>
    <!-- Title -->
    <div class="text-uppercase text-center mb-7">
      <p class="text-success fs-18 mb-2">hello</p>
      <h2 class="text-white fs-30 mb-0 fwb">welcome back</h2>
    </div>

    <!-- SignIn form -->
    <div class="sign-up-form">
      <div class="mb-5">
        <div class="form-group mb-5">
          <label class="text-uppercase w-100 mb-3" for="email">
            Email
            <span class="position-relative end--1 text-danger fs-18">*</span>
          </label>
          <input
            id="email"
            class="outline-0 auth-input"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div class="form-group">
          <label class="text-uppercase w-100 mb-3" for="password">
            password
            <span class="position-relative end--1 text-danger fs-18">*</span>
          </label>
          <input
            id="password"
            class="outline-0 auth-input"
            type="password"
            placeholder="Password"
          />
        </div>
      </div>

      <div class="d-flex align-items-center justify-content-end mb-7">
        <router-link
          :to="{ name: 'forgot-password' }"
          class="fs-14 text-info-tint"
          >Forgot Password?</router-link
        >
      </div>

      <div class="mw--45 mx-auto mb-5">
        <button
          @click="goToHome"
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
          login
        </button>
      </div>

      <div class="text-center mb-7">
        Don't have an account?
        <router-link :to="{ name: 'sign-up' }" class="text-success"
          >Sign up now</router-link
        >
      </div>
    </div>

    <!-- SignIn with other ways -->
    <div class="text-uppercase text-center overflow-hidden mb-5">
      <span class="or px-3 position-relative">or</span>
    </div>

    <div class="flex-center">
      <div
        class="
          border border-white
          rounded-circle
          w--8
          h--8
          flex-center
          cursor-pointer
          text-white
          me-4
        "
      >
        <i class="fab fa-facebook-f"></i>
      </div>
      <div
        class="
          border border-white
          rounded-circle
          w--8
          h--8
          flex-center
          cursor-pointer
          text-white
          me-4
        "
      >
       <i class="fab fa-line"></i>
      </div>
      <div
        class="
          border border-white
          rounded-circle
          w--8
          h--8
          flex-center
          cursor-pointer
          text-white
        "
      >
        <i class="fab fa-google"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class SignIn extends Vue {
  goToHome() {
    this.$router.push('/')
  }
}
</script>
