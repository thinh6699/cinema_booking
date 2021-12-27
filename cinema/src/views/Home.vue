<template>
  <div class="home-page">
    <Banner :bg_url="require('@/assets/images/banner-home.jpg')">
      <h1 class="text-white text-uppercase fwb fs-36 fs-lg-80 mb-4">
        book your tickets for <span class="text-success">movies</span>
      </h1>
      <p class="fs-20 fs-lg-28 fwb-500 mb-0">
        Safe, secure, reliable ticketing.Your ticket to live entertainment!
      </p>
    </Banner>

    <div class="container">
      <div class="py-20">
        <div class="search-container">
          <div class="p-4">
            <h5 class="text-uppercase text-center text-success">
              welcome to thinh6699
            </h5>
            <p class="fwb text-white text-uppercase text-center fs-22">
              what are you looking for
            </p>
            <ul class="list-unstyled mb-4">
              <li
                class="btn-gradient w--40 mx-auto flex-center cursor-pointer mb-4"
              >
                <img src="@/assets/images/movie.png" alt="movie-icon" />
                <span class="text-white">MOVIES</span>
              </li>
              <li class="btn-gradient w--40 mx-auto cursor-pointer flex-center">
                <img src="@/assets/images/event.png" alt="movie-icon" />
                <span class="text-white">EVENT</span>
              </li>
            </ul>
            <div class="search-input-condition">
              <div class="position-relative">
                <input
                  class="search-input outline-0"
                  type="text"
                  placeholder="Search for Movies"
                />
                <i
                  class="far fa-search position-absolute end-0 top-50 translate-middle-y me-2"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Banner from '@/components/Banner.vue'

@Component({
  components: { Banner }
})
export default class Home extends Vue {}
</script>
