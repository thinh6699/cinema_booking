<template>
  <div class="ticket-checkout">
    <Banner
      :isSeatBanner="true"
      :bg_url="require('@/assets/images/seat-banner.jpg')"
    >
      <p class="fs-30 fs-lg-40 text-white text-uppercase fwb mb-4">
        {{ $store.state.movie.movieDetail.name }}
      </p>
      <span class="fs-18 fs-lg-25 px-2 border-end border-white">{{
        $store.state.ticket.ticketTime.cinema
      }}</span>
      <span class="fs-18 fs-lg-25 px-2">{{
        $store.state.ticket.ticketTime.experience
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
              {{ $store.state.ticket.ticketTime.date }}
            </span>
            <div
              class="btn-gradient rounded h--10 flex-center position-relative w--22"
            >
              <span>{{ $store.state.ticket.ticketTime.time }}</span>
            </div>
          </div>

          <!-- Back btn -->
          <div
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
        <div class="col-12 col-lg-8 mb-20">
          <div>123</div>
        </div>

        <!-- Total Amount -->
        <div class="col-12 col-lg-4 mb-20">
          <div class="border bg-dark-tint-1 rounded">
            <div class="p-4 border-0 border-bottom border-dashed">
              <p
                class="text-center text-white text-uppercase fs-22 fwb-500 pb-3 border-0 border-bottom border-dashed mb-6"
              >
                {{ $t('movie_food.booking_summary') }}
              </p>

              <!-- Ticket Detail -->
              <div
                class="ticket-detail pb-4 border-0 border-bottom border-dashed mb-6"
              >
                <p class="text-success text-uppercase fs-18 fwb-500 mb-2">
                  {{ $store.state.movie.movieDetail.name }}
                </p>
                <p class="mb-2">
                  {{ $store.state.ticket.ticketTime.date }}
                </p>
                <p class="mb-4">
                  {{ $store.state.ticket.ticketTime.experience }}
                </p>

                <div
                  class="d-flex align-items-center justify-content-between mb-2"
                >
                  <span class="text-success text-uppercase fs-18 fwb-500">
                    {{ $store.state.ticket.ticketTime.cinema }}</span
                  >
                  <span class="text-white text-uppercase fs-18 fwb-500">
                    {{ $store.state.ticket.ticketAmount.quantity }}</span
                  >
                </div>

                <div
                  class="d-flex align-items-center justify-content-between mb-8"
                >
                  <span> {{ $store.state.ticket.ticketAmount.name }}</span>
                  <span class="text-uppercase">
                    {{ $t('movie_food.tickets') }}</span
                  >
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span class="text-success text-uppercase fs-18 fwb-500">
                    {{ $t('movie_food.ticket_price') }}</span
                  >
                  <span class="text-white fs-18 fwb-500">
                    {{
                      `${handlePrice($store.state.ticket.ticketAmount.price)}đ`
                    }}
                  </span>
                </div>
              </div>

              <!-- Combos Detail -->
              <div
                class="combo-detail pb-6 border-0 border-bottom border-dashed mb-6"
              >
                <div class="d-flex align-items-center justify-content-between">
                  <span class="text-success text-uppercase fs-18 fwb-500">
                    {{ $t('movie_food.combos') }}</span
                  >
                  <span class="text-white fs-18 fwb-500">
                    {{ `${handlePrice($store.state.ticket.comboPrice)}đ` }}
                  </span>
                </div>
                <div
                  v-for="item in $store.state.ticket.comboCart"
                  :key="item.id"
                  class="d-flex align-items-baseline justify-content-between pt-2"
                >
                  <span class="me-3"> {{ item.name }}</span>
                  <span> x{{ item.quantity }}</span>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between mb-2 pt-8"
                >
                  <span class="text-success text-uppercase fs-18 fwb-500">
                    {{ $t('movie_food.food_drink') }}</span
                  >
                  <span class="text-white fs-18 fwb-500">
                    {{ `${handlePrice($store.state.ticket.foodDrinkPrice)}đ` }}
                  </span>
                </div>
                <div
                  v-for="item in $store.state.ticket.foodDrinksCart"
                  :key="item.id"
                  class="d-flex align-items-baseline justify-content-between pt-2"
                >
                  <span class="me-3"> {{ item.name }}</span>
                  <span> x{{ item.quantity }}</span>
                </div>
              </div>

              <!-- Total Price -->
              <div
                class="d-flex align-items-center justify-content-between mb-2"
              >
                <span class="text-uppercase">
                  {{ $t('movie_food.price_no_vat') }}</span
                >
                <span>{{ `${handlePrice(priceNoVat)}đ` }}</span>
              </div>
              <div
                class="d-flex align-items-center justify-content-between mb-2"
              >
                <span class="text-uppercase"> Vat</span>
                <span> {{ `${handlePrice(priceNoVat * 0.1)}đ` }}</span>
              </div>
            </div>

            <div class="py-8 p-4 bg-dark-tint-4">
              <div
                class="d-flex align-items-center justify-content-between mb-6"
              >
                <span class="text-success text-uppercase fs-18 fwb-500">
                  {{ $t('movie_food.amount_payable') }}
                </span>
                <span class="text-white fs-18 fwb-500">
                  {{ `${handlePrice(totalPrice)}đ` }}</span
                >
              </div>
              <div
                class="btn-gradient mx-auto w--30 h--11 flex-center cursor-pointer"
              >
                {{ $t('common.btn.proceed') }}
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
import FormatPrice from '@/helpers/FormatPrice'

@Component({
  components: {
    Banner
  }
})
export default class TicketCheckout extends Vue {
  private priceNoVat: number = 0
  private totalPrice: number = 0

  created(): void {
    this.priceNoVat =
      this.$store.state.ticket.ticketAmount.price +
      this.$store.state.ticket.comboPrice +
      this.$store.state.ticket.foodDrinkPrice
    this.totalPrice = this.priceNoVat + this.priceNoVat * 0.1
  }

  handlePrice(price: number) {
    return FormatPrice.handlePrice(price)
  }
}
</script>
