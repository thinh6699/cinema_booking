<template>
  <div class="movie-food">
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
            class="d-inline-flex align-items-center mb-8 me-10 custom-order-2"
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

          <!-- Back btn -->
          <div
            @click="backToSeatPlan"
            class="btn-gradient w--30 h--11 flex-center position-relative custom-order-1 mb-8 cursor-pointer"
          >
            <span class="ms-3">Back</span>
            <i
              class="fad fa-chevron-double-left fs-14 position-absolute top-50 start--6 translate-middle-y text-white"
            />
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
  components: {
    Banner
  }
})
export default class MovieFood extends Vue {
  backToSeatPlan(): void {
    this.$router.push({ name: 'seat-plan' })
  }
}
</script>
