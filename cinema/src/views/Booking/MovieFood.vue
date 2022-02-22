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
            @click="backToSeatPlan"
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
          <!-- Title -->
          <div class="title text-center mb-8">
            <p class="text-uppercase text-success fs-26 fwb mb-2">
              {{ $t('movie_food.have_food') }}
            </p>
            <span class="fs-18">{{ $t('movie_food.prebook_meal') }}</span>
          </div>

          <!-- Combo Types -->
          <div class="combo-types flex-center flex-wrap mb-5">
            <div
              v-for="(type, index) in listMealType"
              :key="index"
              @click="changeType(type.type)"
              :class="mealType === type.type ? 'btn-gradient' : ''"
              class="border rounded-pill m-2 w-unset minw--28 flex-center h--11 cursor-pointer text-uppercase"
            >
              {{ $t(type.name) }}
            </div>
          </div>

          <!-- Food Details -->
          <div class="row mb-8 mb-n6">
            <div
              v-for="item in listFoodsComputed"
              :key="item.id"
              class="col-12 col-lg-6 mb-6"
            >
              <div
                class="food-item border bg-dark-tint-1 rounded-3 p-1 position-relative d-flex flex-column h-100"
              >
                <!-- Food Discount -->
                <div v-if="item.discount > 0" class="discount-tag">
                  <span class="text-white fwb">{{ item.discount }}%</span>
                  <span class="text-uppercase">
                    {{ $t('movie_food.sale_off') }}</span
                  >
                </div>

                <!-- Food Background -->
                <figure
                  class="bg-dark-tint-3 rounded-top-3 padding-top-73 position-relative"
                >
                  <img
                    :src="item.background"
                    class="position-absolute top-0 img-cover"
                  />
                </figure>

                <!-- Food Name -->
                <div
                  class="mx-5 mb-6 text-center pb-4 border-0 border-bottom border-dashed flex-1 d-flex flex-column"
                >
                  <p class="text-white fs-22 mb-2 flex-1">
                    {{ item.name }}
                  </p>
                  <div class="fs-18 text-success">
                    <span
                      class="me-3"
                      :class="
                        item.discount > 0
                          ? 'text-decoration-line-through text-danger'
                          : ''
                      "
                      >{{ `${handlePrice(item.price)}đ` }}</span
                    >
                    <span v-if="item.discount > 0">{{
                      `(${handlePrice(item.discountPrice)}đ)`
                    }}</span>
                  </div>
                </div>

                <!-- Add Quantity -->
                <div
                  class="d-flex align-items-center justify-content-between quantitys px-5 mb-6"
                >
                  <div
                    class="d-flex align-items-center cart-plus-minus border b rounded-pill me-4"
                  >
                    <div
                      @click="decreaseQuantity(item)"
                      class="py-2 px-4 cursor-pointer border-end"
                    >
                      -
                    </div>
                    <input
                      type="number"
                      min="0"
                      oninput="validity.valid||(value='')"
                      class="form-control border-0 w--10 bg-transparent text-white px-2 text-center"
                      v-model="item.quantity"
                    />
                    <div
                      @click="increaseQuantity(item)"
                      class="py-2 px-4 cursor-pointer border-start"
                    >
                      +
                    </div>
                  </div>
                  <div
                    @click="addToCart(item)"
                    class="btn-gradient h--11 w--22 flex-center cursor-pointer"
                  >
                    {{ $t('common.btn.add') }}
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
                    }}</span
                  >
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
                    {{ `${handlePrice(comboPrice)}đ` }}</span
                  >
                </div>
                <div
                  v-for="item in comboCart"
                  :key="item.id"
                  class="d-flex align-items-baseline justify-content-between pt-2"
                >
                  <span class="me-3"> {{ item.name }}</span>
                  <span> x{{ item.quantity }}</span>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between pt-8"
                >
                  <span class="text-success text-uppercase fs-18 fwb-500">
                    {{ $t('movie_food.food_drink') }}</span
                  >
                  <span class="text-white fs-18 fwb-500">
                    {{ `${handlePrice(foodDrinkPrice)}đ` }}</span
                  >
                </div>
                <div
                  v-for="item in foodDrinksCart"
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
                <span> {{ `${handlePrice(priceNoVat)}đ` }}</span>
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
                @click="goToTicketCheckOut"
                class="btn-gradient mx-auto w--30 h--11 flex-center cursor-pointer"
              >
                {{ $t('common.btn.proceed') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalInfo
      :id="'modal-cart-info'"
      :infoMess="$t('common.message.pls_add_item')"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import TicketTime from '@/store/modules/Ticket'
import store from '@/store'
import FormatPrice from '@/helpers/FormatPrice'
import { IFood, IMealType } from '@/models'
import { EMealType } from '@/models/enum'
import moment, { Moment } from 'moment'

const TicketModule = getModule(TicketTime, store)

@Component({})
export default class MovieFood extends Vue {
  private timeRequire: Moment = moment(10 * 60 * 1000)
  private eMealType: any = EMealType
  private mealType: number = this.eMealType.ALL
  private comboPrice: number = 0
  private foodDrinkPrice: number = 0
  private priceNoVat: number = 0
  private totalPrice: number = 0
  private listFoods: IFood[] = [
    {
      id: 1,
      background: require('@/assets/images/combo1.png'),
      name: 'Muchaco, Crispy Taco, Bean Burrito',
      price: 100000,
      discount: 25,
      quantity: 0,
      type: this.eMealType.COMBO
    },
    {
      id: 2,
      background: require('@/assets/images/combo2.png'),
      name: 'Crispy Beef Taco, Beef Mucho Nachos',
      price: 100000,
      discount: 25,
      quantity: 0,
      type: this.eMealType.COMBO
    },
    {
      id: 3,
      background: require('@/assets/images/combo3.png'),
      name: 'Chicken Quesadilla, Crispy Beef Taco',
      price: 150000,
      discount: 20,
      quantity: 0,
      type: this.eMealType.COMBO
    },
    {
      id: 4,
      background: require('@/assets/images/combo4.png'),
      name: 'Beef Nacho Salad, Crispy Beef Taco',
      price: 200000,
      discount: 50,
      quantity: 0,
      type: this.eMealType.COMBO
    },
    {
      id: 5,
      background: require('@/assets/images/food1.png'),
      name: 'Soft Taco',
      price: 50000,
      discount: 0,
      quantity: 0,
      type: this.eMealType.FOOD
    },
    {
      id: 6,
      background: require('@/assets/images/drink1.png'),
      name: 'Coke',
      price: 30000,
      discount: 0,
      quantity: 0,
      type: this.eMealType.DRINK
    }
  ]

  private listMealType: IMealType[] = [
    {
      type: this.eMealType.ALL,
      name: 'movie_food.all'
    },
    {
      type: this.eMealType.COMBO,
      name: 'movie_food.combos'
    },
    {
      type: this.eMealType.FOOD,
      name: 'movie_food.foods'
    },
    {
      type: this.eMealType.DRINK,
      name: 'movie_food.drinks'
    }
  ]

  private listFoodsComputed: IFood[] = []

  private cart: IFood[] = []
  private comboCart: IFood[] = []
  private foodDrinksCart: IFood[] = []

  created(): void {
    this.listFoods.map((item: any) => {
      item.discountPrice = item.price - (item.price * item.discount) / 100
    })
    this.listFoodsComputed = this.listFoods
    this.priceNoVat =
      this.$store.state.ticket.ticketAmount.price +
      this.comboPrice +
      this.foodDrinkPrice
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

  changeType(type: number): void {
    this.mealType = type
    if (type === this.eMealType.ALL) {
      this.listFoodsComputed = this.listFoods
    } else {
      this.listFoodsComputed = this.listFoods.filter(
        (element: any) => element.type === type
      )
    }
  }

  decreaseQuantity(item: IFood): void {
    if (item.quantity > 0) {
      item.quantity--
    } else return
  }

  increaseQuantity(item: IFood): void {
    item.quantity++
  }

  addToCart(item: any): void {
    let isExist = this.cart.some((element: any) => element.name === item.name)
    // if cart is empty
    if (!this.cart.length) {
      if (item.quantity <= 0) {
        this.$bvModal.show('modal-cart-info')
      } else {
        this.cart.push({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.quantity * item.discountPrice,
          type: item.type
        })
      }
      // if cart has at least one item
    } else {
      // if item not exist in cart yet
      if (!isExist) {
        if (item.quantity <= 0) {
          this.$bvModal.show('modal-cart-info')
        } else {
          this.cart.push({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.quantity * item.discountPrice,
            type: item.type
          })
        }
        // if item has already exist in cart
      } else {
        this.cart.map((element: any, index: number) => {
          if (element.name === item.name) {
            if (item.quantity <= 0) {
              this.cart.splice(index, 1)
            } else {
              element.quantity = item.quantity
              element.price = item.quantity * item.discountPrice
            }
          }
        })
      }
    }

    this.comboCart = this.cart.filter(
      (element: IFood) => element.type === this.eMealType.COMBO
    )
    this.foodDrinksCart = this.cart.filter(
      (element: IFood) =>
        element.type === this.eMealType.FOOD ||
        element.type === this.eMealType.DRINK
    )

    this.comboPrice = this.comboCart.reduce(
      (total: number, element: IFood) => element.price + total,
      0
    )

    this.foodDrinkPrice = this.foodDrinksCart.reduce(
      (total: number, element: IFood) => element.price + total,
      0
    )

    this.priceNoVat =
      this.$store.state.ticket.ticketAmount.price +
      this.comboPrice +
      this.foodDrinkPrice
    this.totalPrice = this.priceNoVat + this.priceNoVat * 0.1
  }

  handlePrice(price: number) {
    return FormatPrice.handlePrice(price)
  }

  backToSeatPlan(): void {
    this.$router.push({ name: 'seat-plan' })
  }

  goToTicketCheckOut(): void {
    TicketModule.HANDLE_COMBO_CART(this.comboCart)
    TicketModule.HANDLE_FOODDRINK_CART(this.foodDrinksCart)
    TicketModule.HANDLE_COMBO_PRICE(this.comboPrice)
    TicketModule.HANDLE_FOODDRINK_PRICE(this.foodDrinkPrice)
    this.$router.push({ name: 'ticket-checkout' })
  }
}
</script>
