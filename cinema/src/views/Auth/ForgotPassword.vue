<template>
  <div>
    <!-- Title -->
    <div class="text-uppercase text-center mb-7">
      <p class="text-success fs-18 mb-2">{{ $t('common.hello') }}</p>
      <h2 class="text-white fs-30 mb-0 fwb">
        {{ $t('forgot_password.title') }}
      </h2>
    </div>

    <!-- Enter your email -->
    <div class="text-success mb-5">
      {{ $t('forgot_password.message') }}
    </div>

    <div class="sign-up-form">
      <div class="mb-10">
        <div class="form-group">
          <input
            id="email"
            class="outline-0 auth-input"
            type="email"
            :placeholder="$t('common.enter_your_email')"
          />
        </div>
      </div>

      <div class="mw--50 mx-auto">
        <button @click="goToResetPassowrd" class="btn btn-gradient">
          {{ $t('common.btn.reset_password') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class ForgotPassword extends Vue {
  goToResetPassowrd(): void {
    this.$router.push({ name: 'reset-password' })
  }
}
</script>
