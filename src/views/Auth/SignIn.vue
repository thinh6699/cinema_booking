<template>
  <div>
    <!-- Title -->
    <div class="text-uppercase text-center mb-7">
      <p class="text-success fs-18 mb-2">{{ $t('common.hello') }}</p>
      <h2 class="text-white fs-30 mb-0 fwb">{{ $t('login.welcome_back') }}</h2>
    </div>

    <!-- SignIn form -->
    <ValidationObserver ref="observer" tag="div" v-slot="{ handleSubmit }">
      <form class="sign-in-form" @submit.prevent="handleSubmit(signIn)">
        <div class="mb-5">
          <div class="form-group mb-5">
            <label class="text-uppercase mb-3 required" for="email">
              {{ $t('common.email') }}
              
            </label>
            <ValidationProvider
              v-slot="{ errors, touched }"
              :rules="{ required: true, email: true }"
              name="email"
            >
              <input
                v-model="formValues.email"
                name="email"
                id="email"
                class="auth-input outline-0"
                :class="
                  (errors[0] && touched) || errors[0] ? 'border-danger' : ''
                "
                :placeholder="$t('common.email')"
              />
              <span
                v-if="(errors[0] && touched) || errors[0]"
                class="text-danger"
              >
                {{ errors[0] }}
              </span>
            </ValidationProvider>
          </div>

          <div class="form-group">
            <label class="text-uppercase mb-3 required" for="password">
              {{ $t('common.password') }}
            </label>
            <ValidationProvider
              v-slot="{ errors, touched }"
              :rules="{ required: true }"
              name="password"
            >
              <input
                v-model="formValues.password"
                name="password"
                id="password"
                class="auth-input outline-0"
                :class="
                  (errors[0] && touched) || errors[0] ? 'border-danger' : ''
                "
                type="password"
                :placeholder="$t('common.password')"
              />
              <span
                v-if="(errors[0] && touched) || errors[0]"
                class="text-danger"
              >
                {{ errors[0] }}
              </span>
            </ValidationProvider>
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
          <button type="submit" class="btn btn-gradient">
            {{ $t('common.btn.login') }}
          </button>
        </div>

        <div class="text-center mb-7">
          {{ $t('login.dont_have_acc') }}
          <router-link :to="{ name: 'sign-up' }" class="text-success">{{
            $t('login.sign_up')
          }}</router-link>
        </div>
      </form>
    </ValidationObserver>

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
import { ValidationObserver } from 'vee-validate'
import { Component, Vue } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import { AuthenticationForm } from '@/models'
import { login } from '@/services/AuthService'

const AuthModule = getModule(Auth, store)

@Component({})
export default class SignIn extends Vue {
  public formValues: AuthenticationForm = {
    email: '',
    password: ''
  }

  async signIn() {
    try {
      const response = await login(this.formValues)
      const token = response.data.access_token
      AuthModule.HANDLE_TOKEN(token)
      this.$router.push({
        path: this.$route.query.redirect
          ? String(this.$route.query.redirect)
          : '/'
      })
    } catch (error: any) {
      this.$toast.error(error.response.data.message)
    }
  }
}
</script>
