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

          <!-- mins left -->
          <div
            class="d-inline-flex flex-column align-items-center mx-2 mb-5 custom-order-3"
          >
            <p class="mb-0 fs-28 fwb-500 text-white">
              {{ remainTime }}
            </p>
            <span>{{ $t('seat_plan.mins_left') }}</span>
          </div>

          <!-- Back btn -->
          <div
            @click="backToMovieFood"
            class="btn-gradient w--30 h--11 flex-center position-relative custom-order-1 mb-8 cursor-pointer"
          >
            <span class="ms-3">{{ $t('common.btn.back') }}</span>
            <i
              class="fad fa-chevron-double-left fs-14 position-absolute top-50 start--2 translate-middle-y text-white"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Food Combos -->
    <div class="food-combos container">
      <div class="row">
        <div class="col-12 col-lg-8 mb-20">
          <div class="bg-dark-tint-1">
            <div class="p-4">
              <!-- Payment option -->
              <div class="payment-option mb-8">
                <h4 class="text-white mb-6">
                  {{ $t('ticket_checkout.payment_option') }}
                </h4>
                <div class="flex-center flex-wrap">
                  <div
                    @click="choosePaymentOption(item)"
                    v-for="item in listPaymentOption"
                    :key="item.id"
                    class="py-4 border rounded-5 mx-3 cursor-pointer px-1"
                    :class="
                      paymentChoose === item.value
                        ? 'border-2 border-primary-shade'
                        : ''
                    "
                  >
                    <div class="mb-2 h--10 w--23">
                      <img class="img-contain" :src="item.avatar" alt="" />
                    </div>
                    <span class="d-block fs-15 text-white text-center">{{
                      $t(item.name)
                    }}</span>
                  </div>
                </div>
              </div>

              <!-- Enter card details -->
              <div class="enter-details">
                <h4 class="text-white mb-5">
                  {{ $t('ticket_checkout.enter_card_detail') }}
                </h4>
                <div class="input-details">
                  <!-- Card number -->
                  <div class="card-detail mb-5">
                    <p class="mb-2">{{ $t('ticket_checkout.card_number') }}</p>
                    <input
                      type="number"
                      min="0"
                      oninput="validity.valid||(value='')"
                      class="h--10 form-control border bg-transparent rounded-2 text-light-shade"
                      v-model.number="cardNumber"
                    />
                  </div>
                  <!-- Card holder -->
                  <div class="card-detail mb-5">
                    <p class="mb-2">{{ $t('ticket_checkout.card_holder') }}</p>
                    <input
                      type="text"
                      min="0"
                      oninput="validity.valid||(value='')"
                      class="h--10 form-control border bg-transparent rounded-2 text-light-shade"
                      v-model="cardHolderName"
                    />
                  </div>
                  <!-- Expiration -->
                  <div class="card-detail mb-5">
                    <p class="mb-2">{{ $t('ticket_checkout.expiration') }}</p>
                    <div class="date-picker">
                      <date-picker
                        id="expiration_date"
                        v-model="expirationDate"
                        placeholder="MM/YYYY"
                        type="date"
                        format="MM/YYYY"
                        input-class="rounded-2 mx-input text-center bg-transparent text-light-shade border-border-color h--10"
                        class="w-100"
                        :popup-style="{ left: 'unset', right: 0 }"
                        :append-to-body="false"
                      />
                    </div>
                  </div>
                  <!-- CVV -->
                  <div class="card-detail mb-5">
                    <p class="mb-2">CVV</p>
                    <input
                      type="number"
                      min="0"
                      oninput="validity.valid||(value='')"
                      class="h--10 form-control border bg-transparent rounded-2 text-light-shade"
                      v-model.number="cvvNumber"
                    />
                  </div>
                  <!-- Accept term -->
                  <div class="d-flex align-items-center">
                    <input
                      class="form-check-input cursor-pointer w--4 h--4 me-2 mt-0 flex-fixed"
                      type="checkbox"
                      v-model="agreeTerm"
                    />
                    <label
                      >{{ $t('signup.agree_to') }}
                      <span class="text-success cursor-pointer">{{
                        $t('signup.term_and_privacy')
                      }}</span></label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  <span>
                    {{ $store.state.ticket.ticketAmount.name.join(', ') }}</span
                  >
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
                @click="makePayment"
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
import FormatPrice from '@/helpers/FormatPrice'
import { IPaymentOption } from '@/models'
import { EPayment } from '@/models/enum'
import DatePicker from 'vue2-datepicker'
import moment, { Moment } from 'moment'

@Component({
  components: {
    DatePicker
  }
})
export default class TicketCheckout extends Vue {
  private timeRequire: Moment = moment(10 * 60 * 1000)
  private ePayment: any = EPayment
  private paymentChoose: number = this.ePayment.CREDIT
  private priceNoVat: number = 0
  private totalPrice: number = 0
  private expirationDate: string = ''
  private cardNumber: number | null = null
  private cardHolderName: string = ''
  private cvvNumber: number | null = null
  private agreeTerm: boolean = false
  private listPaymentOption: IPaymentOption[] = [
    {
      name: 'ticket_checkout.credit_card',
      value: this.ePayment.CREDIT,
      avatar: require('@/assets/images/card.png')
    },
    {
      name: 'ticket_checkout.momo',
      value: this.ePayment.MOMO,
      avatar: require('@/assets/images/momo.png')
    }
  ]

  created(): void {
    this.priceNoVat =
      this.$store.state.ticket.ticketAmount.price +
      this.$store.state.ticket.comboPrice +
      this.$store.state.ticket.foodDrinkPrice
    this.totalPrice = this.priceNoVat + this.priceNoVat * 0.1

    const stopCount = setInterval(() => {
      this.timeRequire = moment(this.timeRequire).subtract(1, 'seconds')
      // if timeleft = 0 then clear interval
      if (moment(this.timeRequire).diff(moment(0)) === 0) {
        clearInterval(stopCount)
        console.log('timeout')
      }
    }, 1000)
  }

  // use like computed
  get remainTime() {
    return this.timeRequire.format('mm:ss')
  }

  choosePaymentOption(item: IPaymentOption): void {
    this.paymentChoose = item.value
  }

  handlePrice(price: number) {
    return FormatPrice.handlePrice(price)
  }

  backToMovieFood(): void {
    this.$router.push({ name: 'movie-food' })
  }

  makePayment(): void {
    const data = {
      card_number: this.cardNumber,
      card_holder: this.cardHolderName.toUpperCase(),
      expiration_date: moment(this.expirationDate).format('MM/YYYY'),
      cvv_number: this.cvvNumber
    }
    if (this.agreeTerm) {
      console.log(data)
    } else {
      console.log('ban chua dong y dieu khoan')
    }
  }
}
</script>
