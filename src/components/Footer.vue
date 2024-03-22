<template>
  <footer class="bg-dark-tint">
    <div class="newsletter pt-20 pb-12">
      <div class="container">
        <div
          class="bg-newsletter rounded-8 overflow-hidden position-relative text-center py-15 px-5"
        >
          <div class="newsletter-wrapper">
            <h5 class="text-success text-uppercase fs-20 fs-lg-24 mb-6">
              {{ $t('footer.subcribe_to') }}
            </h5>
            <h3 class="text-white text-uppercase fs-30 fs-lg-36 mb-12">
              {{ $t('footer.exclusive_benefit') }}
            </h3>
            <div class="position-relative mb-8">
              <input
                class="form-control h--14 rounded-8 text-white bg-transparent border-white-o4 pe-41"
                type="text"
                :placeholder="$t('common.enter_your_email')"
              />
              <button
                class="mw--40 text-uppercase position-absolute end-0 top-0 btn btn-gradient"
              >
                {{ $t('common.btn.subcribe') }}
              </button>
            </div>
            <p class="mb-0 fs-lg-18">
              {{ $t('footer.respect_privacy') }}
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
            {{ $t('footer.copyright') }}
            <span class="text-success text-uppercase">thinh6699</span>
          </div>
        </div>
        <div class="col-lg-6">
          <ul
            class="list-unstyled d-flex flex-wrap align-items-center justify-content-lg-end mb-0"
          >
            <li class="me-4 fs-lg-18">{{ $t('footer.about') }}</li>
            <li class="me-4 fs-lg-18">{{ $t('footer.term_of_use') }}</li>
            <li class="me-4 fs-lg-18">{{ $t('footer.privacy_policy') }}</li>
            <li class="me-4 fs-lg-18">{{ $t('footer.faq') }}</li>
            <li class="me-4 fs-lg-18">{{ $t('footer.feedback') }}</li>
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
  public socialIcons: any[] = [
    'fa-facebook-f',
    'fa-line',
    'fa-instagram',
    'fa-google',
    'fa-twitter'
  ]
}
</script>
