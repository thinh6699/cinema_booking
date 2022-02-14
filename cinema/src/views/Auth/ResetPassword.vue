<template>
  <div>
    <!-- Title -->
    <div class="text-uppercase text-center mb-7">
      <p class="text-success fs-18 mb-2">hello</p>
      <h2 class="text-white fs-30 mb-0 fwb">reset password</h2>
    </div>

    <!-- reset your password -->
    <div class="text-success mb-5">
      Please update your password to complete this process!
    </div>

    <div class="sign-up-form">
      <div class="mb-10">
        <div class="form-group mb-5">
          <label class="text-uppercase w-100 mb-3" for="password">
            new password
            <span class="position-relative end--1 text-danger fs-18">*</span>
          </label>
          <input
            id="password"
            class="auth-input outline-0"
            type="password"
            placeholder="Enter your new password"
          />
        </div>

        <div class="form-group">
          <label class="text-uppercase w-100 mb-3" for="confirm-password">
            confirm password
            <span class="position-relative end--1 text-danger fs-18">*</span>
          </label>
          <input
            id="confirm-password"
            class="auth-input outline-0"
            type="password"
            placeholder="Confirm your password"
          />
        </div>
      </div>

      <div class="mw--45 mx-auto mb-5">
        <button v-b-modal="'modal-info'" class="btn btn-gradient">
          confirm
        </button>
      </div>
    </div>
    <ModalAuthInfo
      :title="'reset password notification'"
      :message="'You have successfully updated your password!'"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ResetPassword extends Vue {}
</script>
