<template>
  <div class="movie-detail">
    <!-- Banner Section -->
    <Banner :isDetailBanner="true" :bg_url="movieDetail.background">
      <div class="text-start minh--45 offset-lg-3">
        <p class="fs-22 fs-lg-30 text-white mb-6">{{ movieDetail.name }}</p>
        <div class="d-flex align-items-center mb-4">
          <div
            v-for="category in movieDetail.category"
            :key="category.id"
            class="minw--30 rounded-pill border border-light-shade text-center me-3 p-2"
          >
            {{ category.name }}
          </div>
        </div>
        <div
          class="d-md-flex justify-content-between mb-4"
          v-if="movieDetail.date"
        >
          <div class="release-time d-flex align-items-center mb-4">
            <div class="d-flex align-items-center me-5">
              <i class="fs-18 fal fa-calendar-alt me-1"></i>
              <span> {{ moment(movieDetail.date).format('DD/MM/YYYY') }}</span>
            </div>
            <div class="d-flex align-items-center">
              <i class="fs-18 far fa-clock me-1"></i>
              <span> {{ movieDetail.duration }}</span>
            </div>
          </div>
          <ul class="list-unstyled d-flex align-items-center mb-0">
            <li class="h--6 w--6 cursor-pointer flex-center me-4">
              <i class="fab fa-facebook-f"></i>
            </li>

            <li class="h--6 w--6 cursor-pointer flex-center me-4">
              <i class="fab fa-instagram"></i>
            </li>
            <li class="h--6 w--6 cursor-pointer flex-center me-4">
              <i class="fab fa-google"></i>
            </li>
            <div
              class="d-block d-lg-none btn btn-dark-shade minw--30 rounded-pill border border-light-shade text-center p-2"
              @click="openTrailer"
            >
              Watch Trailer
            </div>
          </ul>
        </div>
      </div>
      <div class="movie-thumbnail rounded">
        <img
          v-lazy="movieDetail.poster"
          :alt="movieDetail.name"
          class="img-cover rounded"
        />
        <div
          class="position-absolute top-50 start-50 translate-middle cursor-pointer"
          v-if="movieDetail.poster"
          @click="openTrailer"
        >
          <img src="@/assets/images/video-button.png" />
        </div>
      </div>
    </Banner>

    <!-- Rating section -->
    <div class="py-15 px-3 bg-dark-tint-1">
      <div
        class="d-md-flex align-items-center justify-content-around offset-lg-3"
      >
        <div
          class="d-flex align-items-center justify-content-center mb-6 mb-md-0"
        >
          <div
            v-if="movieDetail.rotten_tomato_rating"
            class="d-flex flex-column align-items-center px-3 px-md-5"
          >
            <div class="d-flex align-items-center fs-18 fs-lg-22">
              <img src="@/assets/images/tomato.png" class="me-1" />
              <span>{{ `${movieDetail.rotten_tomato_rating}%` }}</span>
            </div>
            <span class="fs-lg-22">Rotten Tomatoes</span>
          </div>
          <div
            v-if="movieDetail.like"
            class="d-flex flex-column align-items-center px-3 px-md-5"
          >
            <div class="d-flex align-items-center fs-18 fs-lg-22">
              <img src="@/assets/images/cake.png" class="me-1" />
              <span>{{ `${movieDetail.like}%` }}</span>
            </div>
            <span class="fs-lg-22">Audience Score</span>
          </div>
        </div>

        <!-- Booking ticket button -->
        <div class="flex-center">
          <div
            class="btn-gradient h--14 w--45 flex-center rounded-pill cursor-pointer"
          >
            Booking Ticket
          </div>
        </div>
      </div>
    </div>

    <!-- Movie description -->
    <div class="py-20 movie-decription">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="payment mb-10">
              <div class="movie-format mb-6">
                <span
                  class="d-inline-block border px-4 py-1 minw--17 rounded-pill text-center"
                  >{{ movieDetail.format }}</span
                >
              </div>

              <div class="application-offer mb-6">
                <p class="text-white fs-24 mb-6">Applicable Offer</p>
                <!-- Amazon Payment -->
                <div
                  class="pay-with-amazon p-4 border border-dashed rounded mb-6"
                >
                  <img
                    src="@/assets/images/amazon.png"
                    alt="Amazon Pay"
                    class="mb-6"
                  />
                  <p class="text-white payment-hover cursor-pointer">
                    Amazon Pay Cashback Offer
                  </p>
                  <p class="fs-14 mb-0">Win Cashback Upto Rs 300*</p>
                </div>

                <!-- Paypal Payment -->
                <div
                  class="pay-with-amazon p-4 border border-dashed rounded mb-6"
                >
                  <img
                    src="@/assets/images/paypal.png"
                    alt="Amazon Pay"
                    class="mb-6"
                  />
                  <p class="text-white payment-hover cursor-pointer">
                    PayPal Offer
                  </p>
                  <p class="fs-14 mb-0">
                    Transact first time with Paypal and get 100% cashback up to
                    Rs. 500
                  </p>
                </div>

                <!-- HDFC Payment -->
                <div class="pay-with-amazon p-4 border border-dashed rounded">
                  <img
                    src="@/assets/images/hdfc.png"
                    alt="Amazon Pay"
                    class="mb-6"
                  />
                  <p class="text-white payment-hover cursor-pointer">
                    HDFC Bank Offer
                  </p>
                  <p class="fs-14 mb-0">
                    Get 15% discount up to INR 100* and INR 50* off on F&B T&C
                    apply
                  </p>
                </div>
              </div>

              <!-- Advertising -->
              <figure class="d-block mb-0">
                <img src="@/assets/images/advertising1.jpg" class="img-cover" />
              </figure>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="movie-info">
              <div class="movie-photos">
                <p class="mb-6 text-white text-uppercase fs-24 fwb">photos</p>
                <Swiper class="swiper" :options="swiperOption">
                  <SwiperSlide v-for="i in 5" :key="i">
                    <div>
                      <img src="@/assets/images/advertising1.jpg" />
                    </div>
                  </SwiperSlide>

                  <div class="swiper-pagination" slot="pagination"></div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalTrailer
      :trailerUrl="movieDetail.trailer_url"
      :movieName="movieDetail.name"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Banner from '@/components/Banner.vue'
import MovieService from '@/services/MovieService'
import ModalTrailer from '@/components/Modals/ModalTrailer.vue'

@Component({
  components: {
    Banner,
    ModalTrailer
  }
})
export default class MovieDetail extends Vue {
  private movieDetail: any = {}
  private swiperOption = {
    slidesPerView: 4,
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  }

  created(): void {
    this.getMovieDetail()
  }

  getMovieDetail(): void {
    MovieService.getMovieById(this.$route.params.movieId)
      .then((response: any) => {
        if (response.status === 200) {
          this.movieDetail = response.data
          if (this.$route.params.openTrailer) {
            this.openTrailer()
          }
        }
      })
      .catch((error: any) => {
        console.log(error)
      })
  }

  openTrailer(): void {
    this.$bvModal.show('modal-trailer')
  }
}
</script>
