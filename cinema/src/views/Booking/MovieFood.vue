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
    <div class="pt-10 pb-2 bg-dark-tint-1 mb-20">
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

    <!-- Food Combos -->
    <div class="food-combos container">
      <div class="row">
        <div class="col-12 col-lg-8">
          <!-- Title -->
          <div class="title text-center mb-8">
            <p class="text-success text-uppercase fs-18 mb-2">you're hungry</p>
            <p class="text-uppercase text-white fs-26 fwb mb-2">we have food</p>
            <span class="fs-18">Prebook Your Meal and Save More!</span>
          </div>

          <!-- Combo Types -->
          <div class="combo-types flex-center flex-wrap mb-5">
            <div
              class="border rounded-pill m-2 w-unset minw--25 flex-center h--11 cursor-pointer text-uppercase"
            >
              All
            </div>
            <div
              class="border rounded-pill m-2 w-unset minw--30 flex-center h--11 cursor-pointer text-uppercase"
            >
              Combos
            </div>
            <div
              class="border rounded-pill m-2 w-unset minw--30 flex-center h--11 cursor-pointer text-uppercase"
            >
              Foods
            </div>
            <div
              class="border rounded-pill m-2 w-unset minw--30 flex-center h--11 cursor-pointer text-uppercase"
            >
              Drinks
            </div>
          </div>

          <!-- Food Details -->
          <div class="row mb-8">
            <div class="col-12 col-lg-6">
              <div class="food-item border bg-dark-tint-1 rounded-3 p-1">
                <figure class="bg-dark-tint-3 rounded-top-3">
                  <img src="@/assets/images/combo1.png" />
                </figure>
                <p
                  class="mx-5 mb-6 text-center text-white fs-22 pb-4 border-0 border-bottom border-dashed"
                >
                  Muchaco, Crispy Taco, Bean Burrito
                </p>
                <div
                  class="d-flex align-items-center justify-content-between quantitys px-5 mb-6"
                >
                  <div class="d-flex align-items-center cart-plus-minus border">
                    <div class="py-2 px-4 cursor-pointer border-end">-</div>
                    <input
                      type="number"
                      class="form-control border-0 w--15 bg-transparent text-white px-2 text-center"
                      :value="1"
                    />
                    <div class="py-2 px-4 cursor-pointer border-start">+</div>
                  </div>
                </div>
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
