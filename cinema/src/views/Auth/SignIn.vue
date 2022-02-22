<template>
  <div>
    <!-- Title -->
    <div class="text-uppercase text-center mb-7">
      <p class="text-success fs-18 mb-2">{{ $t('common.hello') }}</p>
      <h2 class="text-white fs-30 mb-0 fwb">{{ $t('login.welcome_back') }}</h2>
    </div>

    <!-- SignIn form -->
    <div class="sign-up-form">
      <div class="mb-5">
        <div class="form-group mb-5">
          <label class="text-uppercase w-100 mb-3" for="email">
            {{ $t('common.email') }}
            <span class="position-relative end--1 text-danger fs-18">*</span>
          </label>
          <input
            id="email"
            class="outline-0 auth-input"
            type="email"
            :placeholder="$t('common.enter_your_email')"
          />
        </div>

        <div class="form-group">
          <label class="text-uppercase w-100 mb-3" for="password">
            {{ $t('common.password') }}
            <span class="position-relative end--1 text-danger fs-18">*</span>
          </label>
          <input
            id="password"
            class="outline-0 auth-input"
            type="password"
            :placeholder="$t('common.password')"
          />
        </div>
      </div>

      <div class="d-flex align-items-center justify-content-end mb-7">
        <router-link
          :to="{ name: 'forgot-password' }"
          class="fs-14 text-info-tint"
          >{{ $t('login.forgot_password') }}</router-link
        >
      </div>

      <div class="mw--45 mx-auto mb-5">
        <button @click="login" class="btn btn-gradient">
          {{ $t('common.btn.login') }}
        </button>
      </div>

      <div class="text-center mb-7">
        {{ $t('login.dont_have_acc') }}
        <router-link :to="{ name: 'sign-up' }" class="text-success">{{
          $t('login.sign_up')
        }}</router-link>
      </div>
    </div>

    <!-- SignIn with other ways -->
    <div class="text-uppercase text-center overflow-hidden mb-5">
      <span class="or px-3 position-relative">{{ $t('login.or') }}</span>
    </div>

    <div class="flex-center">
      <div
        class="border border-white rounded-circle w--8 h--8 flex-center cursor-pointer text-white me-4"
      >
        <i class="fab fa-facebook-f"></i>
      </div>
      <div
        class="border border-white rounded-circle w--8 h--8 flex-center cursor-pointer text-white me-4"
      >
        <i class="fab fa-line"></i>
      </div>
      <div
        class="border border-white rounded-circle w--8 h--8 flex-center cursor-pointer text-white"
      >
        <i class="fab fa-google"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store'
import Auth from '@/store/modules/Auth'
import { Component, Vue } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'

const AuthModule = getModule(Auth, store)

@Component({})
export default class SignIn extends Vue {
  private token: string = 'ey123456abc789'

  login(): void {
    AuthModule.HANDLE_TOKEN(this.token)
    this.$router.push({
      path: this.$route.query.redirect
        ? String(this.$route.query.redirect)
        : '/'
    })
  }
}
</script>
