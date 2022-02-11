<template>
  <footer class="bg-dark-tint">
    <div class="newsletter pt-20 pb-12">
      <div class="container">
        <div
          class="bg-newsletter rounded-8 overflow-hidden position-relative text-center py-15 px-5"
        >
          <div class="newsletter-wrapper">
            <h5 class="text-success fs-20 fs-lg-24 mb-6">
              SUBSCRIBE TO THINH6699
            </h5>
            <h3 class="text-white fs-30 fs-lg-36 mb-12">
              TO GET EXCLUSIVE BENEFITS
            </h3>
            <div class="position-relative mb-8">
              <input
                class="form-control h--14 rounded-8 text-white bg-transparent border-white-o4 pe-41"
                type="text"
                placeholder="Enter your email address"
              />
              <button
                class="mw--40 position-absolute end-0 top-0 btn btn-gradient"
              >
                SUBSCRIBE
              </button>
            </div>
            <p class="mb-0 fs-lg-18">
              We respect your privacy, so we never share your info
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row align-items-center py-8 border-bottom">
        <div class="col-md-6">
          <router-link class="d-block mb-8 mb-md-0" :to="{ name: 'home' }">
            <img src="@/assets/images/logo.png" alt="" />
          </router-link>
        </div>
        <div class="col-md-6">
          <ul
            class="list-unstyled d-flex align-items-center justify-content-md-end mb-0"
          >
            <li
              v-for="(icon, index) in socialIcons"
              :key="index"
              class="border border-white active rounded-circle h--10 w--10 cursor-pointer flex-center"
              :class="index !== socialIcons.length - 1 ? 'me-4' : ''"
            >
              <i class="text-white fab" :class="icon"></i>
            </li>
          </ul>
        </div>
      </div>
      <div class="row align-items-center py-8">
        <div class="col-lg-6">
          <div class="mb-5 mb-lg-0 fs-lg-18">
            Copyright © 2020.All Rights Reserved By
            <span class="text-success">THINH6699</span>
          </div>
        </div>
        <div class="col-lg-6">
          <ul
            class="list-unstyled d-flex flex-wrap align-items-center justify-content-lg-end mb-0"
          >
            <li class="me-4 fs-lg-18">About</li>
            <li class="me-4 fs-lg-18">Terms Of Use</li>
            <li class="me-4 fs-lg-18">Privacy Policy</li>
            <li class="me-4 fs-lg-18">FAQ</li>
            <li class="fs-lg-18">Feedback</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Footer extends Vue {
  private socialIcons: any[] = [
    'fa-facebook-f',
    'fa-line',
    'fa-instagram',
    'fa-google',
    'fa-twitter'
  ]
}
</script>
