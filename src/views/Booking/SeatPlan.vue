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
            @click="backToTicketPlan"
            class="btn-gradient w--30 h--11 flex-center position-relative custom-order-1 mb-5 cursor-pointer"
          >
            <span class="ms-3">{{ $t('common.btn.back') }}</span>
            <i
              class="fad fa-chevron-double-left fs-14 position-absolute top-50 start--2 translate-middle-y text-white"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Seat plan -->
    <div class="container mb-20">
      <h3 class="screen">{{ $t('seat_plan.screen') }}</h3>
      <div class="seat-thumb w-100 mw--180 mx-auto mb-7">
        <img src="@/assets/images/screen-thumb.png" class="img-contain" />
      </div>
      <div class="silver-plus">
        <h3 class="subtitle fs-24 text-success mb-7">
          {{ $t('seat_plan.normal') }}
        </h3>
        <ul class="list-unstyled overflow-auto seat-scrollbar mb-0">
          <li
            v-for="(item, index) in listSeat"
            :key="index"
            class="d-flex align-items-center justify-content-between mb-5"
          >
            <span class="me-5 fs-18 w--3 flex-fixed">{{ item.type }}</span>
            <!-- Left Seat -->
            <div class="d-flex left-seat flex-fixed me-5">
              <div
                @click="chooseSeat(item, subItem)"
                v-for="(subItem, subIndex) in item.detail"
                :key="subIndex"
                class="position-relative cursor-pointer"
                :class="subItem.number <= 4 ? 'mx-1' : ''"
              >
                <div v-if="subItem.number <= 4">
                  <img v-if="subItem.choosen" :src="singleChoosen" />
                  <img
                    v-if="!subItem.choosen && !subItem.isChecked"
                    :src="singleFree"
                  />
                  <img
                    v-if="!subItem.choosen && subItem.isChecked"
                    :src="singleChecked"
                  />
                  <span v-if="!subItem.choosen" class="movie-seat fs-15">{{
                    subItem.name
                  }}</span>
                </div>
              </div>
            </div>

            <!-- Middle Seat -->
            <div class="d-flex middle-seat flex-fixed me-5">
              <div
                @click="chooseSeat(item, subItem)"
                v-for="(subItem, subIndex) in item.detail"
                :key="subIndex"
                class="position-relative cursor-pointer"
                :class="
                  subItem.number > 4 && subItem.number <= 10 ? 'mx-1' : ''
                "
              >
                <div v-if="subItem.number > 4 && subItem.number <= 10">
                  <img v-if="subItem.choosen" :src="singleChoosen" />
                  <img
                    v-if="!subItem.choosen && !subItem.isChecked"
                    :src="singleFree"
                  />
                  <img
                    v-if="!subItem.choosen && subItem.isChecked"
                    :src="singleChecked"
                  />
                  <span v-if="!subItem.choosen" class="movie-seat fs-15">{{
                    subItem.name
                  }}</span>
                </div>
              </div>
            </div>

            <!-- Right Seat -->
            <div class="d-flex right-seat flex-fixed me-5">
              <div
                @click="chooseSeat(item, subItem)"
                v-for="(subItem, subIndex) in item.detail"
                :key="subIndex"
                class="position-relative cursor-pointer"
                :class="subItem.number > 10 ? 'mx-1' : ''"
              >
                <div v-if="subItem.number > 10">
                  <img v-if="subItem.choosen" :src="singleChoosen" />
                  <img
                    v-if="!subItem.choosen && !subItem.isChecked"
                    :src="singleFree"
                  />
                  <img
                    v-if="!subItem.choosen && subItem.isChecked"
                    :src="singleChecked"
                  />
                  <span v-if="!subItem.choosen" class="movie-seat fs-15">{{
                    subItem.name
                  }}</span>
                </div>
              </div>
            </div>
            <span class="fs-18 w--3 flex-fixed">{{ item.type }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Confirm information -->
    <div class="container mb-20">
      <div class="position-relative pt-12 pb-6">
        <div class="confirm-seat-bg"></div>
        <div class="container">
          <div
            class="d-flex flex-wrap position-relative align-items-center justify-content-between px-10"
          >
            <!-- Seat Detail -->
            <div class="seat-detail mb-6 me-6">
              <p class="fs-18 mb-0">{{ $t('seat_plan.choosed_seat') }}</p>
              <span
                v-if="listSeatChoose.length"
                class="d-inline-block w--53 text-success fs-25 fwb"
                >{{ handleListSeat(listSeatChoose) }}</span
              >
            </div>

            <!-- Seat Price -->
            <div class="seat-price mb-6 me-6">
              <p class="fs-18 mb-0">{{ $t('seat_plan.total_price') }}</p>
              <span v-if="totalPrice > 0" class="text-success fs-25 fwb">{{
                `${handlePrice(totalPrice)}đ`
              }}</span>
            </div>

            <!-- Btn Proceed -->
            <div
              @click="goToMovieFood"
              class="btn-gradient w--32 h--12 flex-center mb-6 cursor-pointer"
            >
              {{ $t('common.btn.proceed') }}
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
import FormatArrayString from '@/helpers/FormatArrayString'
import { getModule } from 'vuex-module-decorators'
import TicketTime from '@/store/modules/Ticket'
import store from '@/store'
import { ISeat, ISeatDetail } from '@/models'

const TicketModule = getModule(TicketTime, store)

@Component({})
export default class SeatPlan extends Vue {
  public singleFree = require('@/assets/images/single-free.png')
  public coupleFree = require('@/assets/images/couple-free.png')
  public singleChecked = require('@/assets/images/single-checked.png')
  public coupleChecked = require('@/assets/images/couple-checked.png')
  public singleChoosen = require('@/assets/images/single-choosen.png')
  public coupleChoosen = require('@/assets/images/couple-choosen.png')

  public totalPrice: number = 0
  public listSeatChoose: string[] = []
  public listSeat: ISeat[] = [
    {
      type: 'G',
      detail: [],
      price: 100000
    },
    {
      type: 'F',
      detail: [],
      price: 150000
    }
  ]

  created(): void {
    this.listSeat.forEach((item: ISeat) => {
      for (let i = 1; i < 15; i++) {
        item.detail.push({
          number: i,
          choosen: i < 5 ? true : false,
          name: `${item.type}${i}`,
          isChecked: false
        })
      }
    })
  }

  chooseSeat(item: ISeat, subItem: ISeatDetail): void {
    subItem.isChecked = !subItem.isChecked
    let seat = subItem.name
    if (!subItem.choosen) {
      if (subItem.isChecked) {
        this.listSeatChoose.push(seat)
        this.totalPrice += item.price
      } else {
        this.listSeatChoose.pop()
        this.totalPrice -= item.price
      }
    } else return
  }

  handleListSeat(listSeatChoose: string[]) {
    return FormatArrayString.handleArray(listSeatChoose, ', ')
  }

  handlePrice(price: number) {
    return FormatPrice.handlePrice(price)
  }

  backToTicketPlan(): void {
    this.$router.push({ name: 'ticket-plan' })
  }

  goToMovieFood(): void {
    if (this.listSeatChoose.length) {
      let ticketAmount = {
        quantity: this.listSeatChoose.length,
        name: this.listSeatChoose,
        price: this.totalPrice
      }
      TicketModule.HANDLE_TICKET_AMOUNT(ticketAmount)
      this.$router.push({ name: 'movie-food' })
    } else return
  }
}
</script>
