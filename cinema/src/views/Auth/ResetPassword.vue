<template>
  <div>
    <!-- Title -->
    <div class="text-uppercase text-center mb-7">
      <p class="text-success fs-18 mb-2">{{ $t('common.hello') }}</p>
      <h2 class="text-white fs-30 mb-0 fwb">
        {{ $t('reset_password.title') }}
      </h2>
    </div>

    <!-- reset your password -->
    <div class="text-success mb-5">
      {{ $t('reset_password.message') }}
    </div>

    <div class="sign-up-form">
      <div class="mb-10">
        <div class="form-group mb-5">
          <label class="text-uppercase w-100 mb-3" for="password">
            {{ $t('common.new_password') }}
            <span class="position-relative end--1 text-danger fs-18">*</span>
          </label>
          <input
            id="password"
            class="auth-input outline-0"
            type="password"
            :placeholder="$t('common.enter_new_password')"
          />
        </div>

        <div class="form-group">
          <label class="text-uppercase w-100 mb-3" for="confirm-password">
            {{ $t('common.confirm_password') }}
            <span class="position-relative end--1 text-danger fs-18">*</span>
          </label>
          <input
            id="confirm-password"
            class="auth-input outline-0"
            type="password"
            :placeholder="$t('common.confirm_password')"
          />
        </div>
      </div>

      <div class="mw--45 mx-auto mb-5">
        <button v-b-modal="'modal-info'" class="btn btn-gradient">
          {{ $t('common.btn.confirm') }}
        </button>
      </div>
    </div>
    <ModalAuthInfo
      :title="'reset password notification'"
      :message="$t('common.message.reset_password_successfull')"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ResetPassword extends Vue {}
</script>
