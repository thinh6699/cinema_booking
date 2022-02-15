<template>
  <div>
    <!-- Title -->
    <div class="text-uppercase text-center mb-7">
      <p class="text-success fs-18 mb-2">{{ $t('signup.welcome_to') }}</p>
      <h2 class="text-white fs-30 mb-0 fwb">thinh6699 cinema</h2>
    </div>

    <!-- SignUp form -->
    <div class="sign-up-form">
      <div class="mb-5">
        <div class="form-group mb-5">
          <label class="text-uppercase w-100 mb-3" for="full-name">
            {{ $t('common.full_name') }}
            <span class="position-relative end--1 text-danger fs-18">*</span>
          </label>
          <input
            id="full-name"
            class="auth-input outline-0"
            type="email"
            :placeholder="$t('common.your_full_name')"
          />
        </div>

        <div class="form-group mb-5">
          <label class="text-uppercase w-100 mb-3" for="email">
            {{ $t('common.enter_your_email') }}
            <span class="position-relative end--1 text-danger fs-18">*</span>
          </label>
          <input
            id="email"
            class="auth-input outline-0"
            type="email"
            :placeholder="$t('common.enter_your_email')"
          />
        </div>

        <div class="form-group mb-5">
          <label class="text-uppercase w-100 mb-3" for="password">
            {{ $t('common.password') }}
            <span class="position-relative end--1 text-danger fs-18">*</span>
          </label>
          <input
            id="password"
            class="auth-input outline-0"
            type="password"
            :placeholder="$t('common.password')"
          />
        </div>

        <div class="form-group mb-5">
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

        <div class="form-group mb-5">
          <label class="text-uppercase w-100 mb-3" for="address">
            {{ $t('common.address') }}
            <span class="position-relative end--1 text-danger fs-18">*</span>
          </label>
          <input
            id="address"
            class="auth-input outline-0"
            type="text"
            :placeholder="$t('common.address')"
          />
        </div>

        <div class="form-group">
          <label class="text-uppercase w-100 mb-3" for="phone-number">
            {{ $t('common.phone_number') }}
            <span class="position-relative end--1 text-danger fs-18">*</span>
          </label>
          <input
            id="phone-number"
            class="auth-input outline-0"
            type="text"
            :placeholder="$t('common.phone_number')"
          />
        </div>
      </div>

      <div class="d-flex align-items-center justify-content-start mb-7">
        <div class="d-flex align-items-center">
          <input
            class="form-check-input cursor-pointer rounded-circle w--4 h--4 me-1 mt-0 flex-fixed"
            type="checkbox"
            id="agree"
          />
          <label class="cursor-pointer" for="agree"
            >{{ $t('signup.agree_to') }}
            <span class="text-success">{{
              $t('signup.term_and_privacy')
            }}</span></label
          >
        </div>
      </div>

      <div class="mw--45 mx-auto mb-5">
        <button v-b-modal="'modal-info'" class="btn btn-gradient">
          {{ $t('common.btn.signup') }}
        </button>
      </div>

      <div class="text-center mb-7">
        {{ $t('signup.already_have_acc') }}
        <router-link :to="{ name: 'sign-in' }" class="text-success">{{
          $t('signup.login')
        }}</router-link>
      </div>
    </div>
    <ModalAuthInfo
      :title="'sign up notification'"
      :message="$t('common.message.registerd_acc_successfull')"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SignUp extends Vue {}
</script>
