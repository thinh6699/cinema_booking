<template>
  <div class="seat-plan">
    <Banner
      :isSeatBanner="true"
      :bg_url="require('@/assets/images/seat-banner.jpg')"
    >
      <p class="fs-30 fs-lg-40 text-white text-uppercase fwb mb-4">
        {{ $store.state.movie.movieDetail.name }}
      </p>
      <span class="fs-18 fs-lg-25 px-2 border-end border-white">{{
        $store.state.ticketTime.ticketTime.cinema
      }}</span>
      <span class="fs-18 fs-lg-25 px-2">{{
        $store.state.ticketTime.ticketTime.experience
      }}</span>
    </Banner>

    <!-- Timeline information -->
    <div class="py-13 bg-dark-tint-1 mb-20">
      <div class="container">
        <div
          class="d-flex flex-wrap align-items-center justify-content-between"
        >
          <!-- timeline -->
          <div
            class="d-inline-flex align-items-center mb-5 mx-2 custom-order-2"
          >
            <span class="me-5 fs-18">
              {{ $store.state.ticketTime.ticketTime.date }}
            </span>
            <div
              class="btn-gradient rounded h--10 flex-center position-relative w--22"
            >
              <span>{{ $store.state.ticketTime.ticketTime.time }}</span>
            </div>
          </div>

          <!-- mins left -->
          <div
            class="d-inline-flex flex-column align-items-center mx-2 mb-5 custom-order-3"
          >
            <p class="mb-0 fs-28 fwb-500 text-white">05:00</p>
            <span>Mins Left</span>
          </div>

          <!-- Back btn -->
          <div
            class="btn-gradient w--30 h--11 flex-center position-relative custom-order-1 mb-5"
          >
            <span class="ms-3">Back</span>
            <i
              class="fad fa-chevron-double-left fs-14 position-absolute top-50 start--6 translate-middle-y text-white"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Seat plan -->
    <div class="container">
      <h3 class="screen">screen</h3>
      <div class="seat-thumb w-100 mw--180 mx-auto mb-7">
        <img src="@/assets/images/screen-thumb.png" class="img-contain" />
      </div>
      <div class="silver-plus">
        <h3 class="subtitle fs-24 text-success mb-7">SILVER PLUS</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Banner from '@/components/Banner.vue'

@Component({
  components: {
    Banner
  }
})
export default class SeatPlan extends Vue {}
</script>
