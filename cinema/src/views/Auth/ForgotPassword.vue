<template>
  <div>
    <!-- Title -->
    <div class="text-uppercase text-center mb-7">
      <p class="text-success fs-18 mb-2">hello</p>
      <h2 class="text-white fs-30 mb-0 fwb">forgot password</h2>
    </div>

    <!-- Enter your email -->
    <div class="text-success mb-5">
      Please enter your email address so we can verify your information and
      continue to reset your password.
    </div>
    
    <div class="sign-up-form">
      <div class="mb-10">
        <div class="form-group">
          <input
            id="email"
            class="outline-0 auth-input"
            type="email"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div class="mw--45 mx-auto">
        <button
          @click="goToResetPassowrd"
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
          reset password
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class ForgotPassword extends Vue {
  goToResetPassowrd() {
    this.$router.push('reset-password')
  }
}
</script>
