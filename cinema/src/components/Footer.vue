<template>
  <footer class="bg-dark-tint">
    <div class="newsletter pt-20 pb-12">
      <div class="container">
        <div
          class="
            bg-newsletter
            rounded-8
            overflow-hidden
            position-relative
            text-center
            py-15
            px-5
          "
        >
          <div class="newsletter-wrapper">
            <h5 class="text-success fs-24 mb-6">SUBSCRIBE TO BOLETO</h5>
            <h3 class="text-white fs-36 mb-12">TO GET EXCLUSIVE BENIFITS</h3>
            <div class="position-relative mb-8">
              <input
                class="
                  form-control
                  h--13
                  rounded-8
                  shadow-none
                  text-info-tint
                  bg-transparent
                  border-white-o4
                  fs-18
                  pe-41
                "
                type="text"
                placeholder="Enter your email address"
              />
              <button
                class="
                  mw--40
                  position-absolute
                  end-0
                  top-0
                  btn btn-auth
                  w-100
                  h--13
                  rounded-pill
                  text-uppercase
                  shadow-none
                  border-0
                "
              >
                SUBSCRIBE
              </button>
            </div>
            <p class="mb-0 fs-18">
              We respect your privacy, so we never share your info
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div
        class="
          row
          align-items-center
          justify-content-between
          py-8
          border-bottom
        "
      >
        <div class="col-12 col-md-6">
          <router-link class="d-block mb-8 mb-md-0" :to="{ name: 'home' }">
            <img src="../assets/images/logo.png" alt="" />
          </router-link>
        </div>
        <div class="col-12 col-md-6">
          <ul
            class="
              list-unstyled
              d-flex
              align-items-center
              justify-content-md-end
              mb-0
            "
          >
            <li
              class="
                border border-white
                active
                rounded-circle
                h--10
                w--10
                cursor-pointer
                me-4
                flex-center
              "
            >
              <i class="text-white fs-18 fab fa-facebook-f"></i>
            </li>
            <li
              class="
                border border-white
                active
                rounded-circle
                h--10
                w--10
                cursor-pointer
                me-4
                flex-center
              "
            >
              <i class="text-white fs-18 fab fa-line"></i>
            </li>
            <li
              class="
                border border-white
                active
                rounded-circle
                h--10
                w--10
                cursor-pointer
                flex-center
                me-4
              "
            >
              <i class="text-white fs-18 fab fa-instagram"></i>
            </li>
            <li
              class="
                border border-white
                active
                rounded-circle
                h--10
                w--10
                cursor-pointer
                flex-center
                me-4
              "
            >
              <i class="text-white fs-18 fab fa-google"></i>
            </li>
            <li
              class="
                border border-white
                active
                rounded-circle
                h--10
                w--10
                cursor-pointer
                flex-center
              "
            >
              <i class="text-white fs-18 fab fa-twitter"></i>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="d-flex align-items-center justify-content-between flex-wrap py-8"
      >
        <div class="fs-18">
          Copyright © 2020.All Rights Reserved By
          <span class="text-success">Boleto</span>
        </div>
        <ul class="list-unstyled d-flex align-items-center mb-0">
          <li class="px-4 fs-18">About</li>
          <li class="px-4 fs-18">Terms Of Use</li>
          <li class="px-4 fs-18">Privacy Policy</li>
          <li class="px-4 fs-18">FAQ</li>
          <li class="ps-4 fs-18">Feedback</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Footer extends Vue {}
</script>
