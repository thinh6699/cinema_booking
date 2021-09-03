<template>
  <div>
    <!-- Title -->
    <div class="text-uppercase text-center mb-7">
      <p class="text-success fs-18 mb-2">welcome to</p>
      <h2 class="text-white fs-30 mb-0 fwb">thinh6699 cinema</h2>
    </div>

    <!-- SignUp form -->
    <div class="sign-up-form">
      <div class="mb-5">
        <div class="form-group mb-5">
          <label class="text-uppercase w-100 mb-3" for="full-name">
            full name
            <span class="position-relative end--1 text-danger fs-18">*</span>
          </label>
          <input
            id="full-name"
            class="auth-input outline-0"
            type="email"
            placeholder="Your full name"
          />
        </div>

        <div class="form-group mb-5">
          <label class="text-uppercase w-100 mb-3" for="email">
            email
            <span class="position-relative end--1 text-danger fs-18">*</span>
          </label>
          <input
            id="email"
            class="auth-input outline-0"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div class="form-group mb-5">
          <label class="text-uppercase w-100 mb-3" for="password">
            password
            <span class="position-relative end--1 text-danger fs-18">*</span>
          </label>
          <input
            id="password"
            class="auth-input outline-0"
            type="password"
            placeholder="Password"
          />
        </div>

        <div class="form-group mb-5">
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

        <div class="form-group mb-5">
          <label class="text-uppercase w-100 mb-3" for="address">
            address
            <span class="position-relative end--1 text-danger fs-18">*</span>
          </label>
          <input
            id="address"
            class="auth-input outline-0"
            type="text"
            placeholder="Address"
          />
        </div>

        <div class="form-group">
          <label class="text-uppercase w-100 mb-3" for="phone-number">
            phone number
            <span class="position-relative end--1 text-danger fs-18">*</span>
          </label>
          <input
            id="phone-number"
            class="auth-input outline-0"
            type="text"
            placeholder="Phone Number"
          />
        </div>
      </div>

      <div class="d-flex align-items-center justify-content-start mb-7">
        <div class="d-flex align-items-center">
          <input
            class="
              form-check-input
              cursor-pointer
              rounded-circle
              w--4
              h--4
              me-1
              mt-0
              flex-fixed
              shadow-none
            "
            type="checkbox"
            id="agree"
          />
          <label class="cursor-pointer" for="agree"
            >I agree to the
            <span class="text-success">Terms and Privacy Policy</span></label
          >
        </div>
      </div>

      <div class="mw--45 mx-auto mb-5">
        <button v-b-modal="'modal-info'" class="btn btn-gradient shadow-none">
          sign up
        </button>
      </div>

      <div class="text-center mb-7">
        Already have an account?
        <router-link :to="{ name: 'sign-in' }" class="text-success"
          >Login</router-link
        >
      </div>
    </div>
    <ModalInfo
      :title="'sign up notification'"
      :message="'You have successfully registered your account!'"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SignUp extends Vue {}
</script>
