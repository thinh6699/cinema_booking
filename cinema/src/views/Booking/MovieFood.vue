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
        <div class="col-12 col-lg-8 mb-20">
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
          <div class="row mb-8 mb-n6">
            <div
              v-for="item in listFoods"
              :key="item.id"
              class="col-12 col-lg-6 mb-6"
            >
              <div
                class="food-item border bg-dark-tint-1 rounded-3 p-1 position-relative d-flex flex-column h-100"
              >
                <!-- Food Discount -->
                <div v-if="item.discount > 0" class="discount-tag">
                  <span class="text-white fwb">{{ item.discount }}%</span>
                  <span>OFF</span>
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
                    Add
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Total Amount -->
        <div class="col-12 col-lg-4">
          <div class="border bg-dark-tint-1 rounded">
            <div class="p-4 border-0 border-bottom border-dashed">
              <p
                class="text-center text-white text-uppercase fs-22 fwb-500 pb-3 border-0 border-bottom border-dashed mb-6"
              >
                booking summary
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
                    {{ $store.state.ticket.ticketAmount.quantify }}</span
                  >
                </div>

                <div
                  class="d-flex align-items-center justify-content-between mb-8"
                >
                  <span> {{ $store.state.ticket.ticketAmount.name }}</span>
                  <span class="text-uppercase"> Tickets</span>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span class="text-success text-uppercase fs-18 fwb-500">
                    ticket price</span
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
                    combos</span
                  >
                  <span class="text-white fs-18 fwb-500">
                    {{ `${handlePrice(comboPrice)}đ` }}</span
                  >
                </div>
                <div
                  v-for="(item, index) in cart"
                  :key="index"
                  class="d-flex align-items-baseline justify-content-between pt-2"
                >
                  <span class="me-3"> {{ item.name }}</span>
                  <span> x{{ item.quantity }}</span>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between mb-2 pt-8"
                >
                  <span class="text-success text-uppercase fs-18 fwb-500">
                    Foods & Drinks</span
                  >
                  <span class="text-white fs-18 fwb-500"> 0đ</span>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <!-- <span> Some Drinks</span>
                  <span> x2</span> -->
                </div>
              </div>

              <!-- Total Price -->
              <div
                class="d-flex align-items-center justify-content-between mb-2"
              >
                <span class="text-uppercase"> Price</span>
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
                  Amount Payable
                </span>
                <span class="text-white fs-18 fwb-500">
                  {{ `${handlePrice(totalPrice)}đ` }}</span
                >
              </div>
              <div class="btn-gradient mx-auto w--30 h--11 flex-center">
                Proceed
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
  private comboPrice: number = 0
  private foodDrinkPrice: number = 0
  private priceNoVat: number = 0
  private totalPrice: number = 0
  private listFoods: any = [
    {
      id: 1,
      background: require('@/assets/images/combo1.png'),
      name: 'Muchaco, Crispy Taco, Bean Burrito',
      price: 100000,
      discount: 25,
      quantity: 0
    },
    {
      id: 2,
      background: require('@/assets/images/combo2.png'),
      name: 'Crispy Beef Taco, Beef Mucho Nachos',
      price: 100000,
      discount: 25,
      quantity: 0
    },
    {
      id: 3,
      background: require('@/assets/images/combo3.png'),
      name: 'Chicken Quesadilla, Crispy Beef Taco',
      price: 150000,
      discount: 20,
      quantity: 0
    },
    {
      id: 4,
      background: require('@/assets/images/combo4.png'),
      name: 'Beef Nacho Salad, Crispy Beef Taco',
      price: 200000,
      discount: 50,
      quantity: 0
    }
  ]

  private cart: any = []

  created(): void {
    this.listFoods.map((item: any) => {
      item.discountPrice = item.price - (item.price * item.discount) / 100
    })
    this.priceNoVat =
      this.$store.state.ticket.ticketAmount.price +
      this.comboPrice +
      this.foodDrinkPrice
    this.totalPrice = this.priceNoVat + this.priceNoVat * 0.1
  }

  decreaseQuantity(item: any): void {
    if (item.quantity > 0) {
      item.quantity--
    } else return
  }

  increaseQuantity(item: any): void {
    item.quantity++
  }

  backToSeatPlan(): void {
    this.$router.push({ name: 'seat-plan' })
  }

  handlePrice(totalPrice: number) {
    let price = totalPrice.toLocaleString()
    return price
  }

  addToCart(item: any): void {
    let isExist = this.cart.some((element: any) => element.name === item.name)
    if (item.quantity === 0 && !this.cart.length) {
      console.log('vui long them so luong')
    } else {
      if (!isExist && item.quantity > 0) {
        this.cart.push({
          name: item.name,
          quantity: item.quantity,
          price: item.quantity * item.discountPrice
        })
      } else {
        this.cart.map((element: any, index: any) => {
          if (element.name === item.name) {
            if (item.quantity > 0) {
              element.quantity = item.quantity
              element.price = item.quantity * item.discountPrice
            } else {
              this.cart.splice(index, 1)
            }
          } else {
            if (item.quantity === 0 && !isExist) {
              console.log('vui long them so luong')
            }
          }
        })
      }
    }

    this.comboPrice = this.cart.reduce(
      (total: number, element: any) => element.price + total,
      0
    )

    this.priceNoVat =
      this.$store.state.ticket.ticketAmount.price +
      this.comboPrice +
      this.foodDrinkPrice
    this.totalPrice = this.priceNoVat + this.priceNoVat * 0.1
  }
}
</script>
