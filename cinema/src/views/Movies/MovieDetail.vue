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
            @click="goToTicketPlan"
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
          <!-- Applicable Offer -->
          <div class="col-lg-3">
            <div class="payment mb-10">
              <div class="movie-format mb-6">
                <span
                  v-for="(format, index) in movieDetail.format"
                  :key="index"
                  class="d-inline-block border px-4 py-1 minw--16 rounded-pill text-center me-4 me-lg-1 me-xl-4"
                  >{{ format }}</span
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

          <!-- Movie description -->
          <div class="col-lg-9">
            <div class="movie-info">
              <div class="movie-photos mb-8">
                <p class="mb-6 text-white text-uppercase fs-24 fwb">photos</p>
                <Swiper class="swiper" :options="swiperPhotoOptions">
                  <SwiperSlide
                    v-for="(photo, index) in movieDetail.photos"
                    :key="index"
                  >
                    <div
                      class="padding-top-16-9 bg-cover rounded"
                      :style="`background:url(${photo})`"
                    ></div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div
                class="summary-comment border-top border-bottom d-flex text-uppercase fs-18 text-white h--16 mb-8"
              >
                <span
                  @click="changeType('summary')"
                  class="me-6 cursor-pointer flex-center px-2"
                  :class="currentType === 'summary' ? 'border-y-3' : ''"
                  >summary</span
                >
                <span
                  @click="changeType('userReview')"
                  class="cursor-pointer flex-center px-2"
                  :class="currentType === 'userReview' ? 'border-y-3' : ''"
                  >user reviews</span
                >
              </div>

              <!-- Moive synopsis -->
              <div class="movies-synopsis mb-8">
                <p class="text-white text-uppercase fs-24 fwb mb-4">synopsis</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  vehicula eros sit amet est tincidunt aliquet. Fusce laoreet
                  ligula ac ultrices eleifend. Donec hendrerit fringilla odio,
                  ut feugiat mi convallis nec. Fusce elit ex, blandit vitae
                  mattis sit amet, iaculis ac elit. Ut diam mauris, viverra sit
                  amet dictum vel, aliquam ac quam. Ut mi nisl, fringilla sit
                  amet erat et, convallis porttitor ligula. Sed auctor, orci id
                  luctus venenatis, dui dolor euismod risus, et pharetra orci
                  lectus quis sapien. Duis blandit ipsum ac consectetur
                  scelerisque.
                </p>
              </div>

              <!-- Movie cast -->
              <div class="movies-cast mb-16">
                <div
                  class="pb-2 border-0 border-bottom border-dashed mb-8 position-relative"
                >
                  <p class="text-white text-uppercase fs-24 fwb mb-0">cast</p>
                  <div class="swiper-prev-cast flex-center">
                    <i
                      class="fad fa-chevron-double-left fs-20 text-success"
                    ></i>
                  </div>
                  <div class="swiper-next-cast flex-center">
                    <i
                      class="fad fa-chevron-double-right fs-20 text-success"
                    ></i>
                  </div>
                </div>

                <Swiper class="swiper" :options="swiperCastOptions">
                  <SwiperSlide
                    v-for="(cast, index) in movieDetail.casts"
                    :key="index"
                  >
                    <div class="d-flex flex-column align-items-center">
                      <div
                        class="flex-center cast-avatar-container w--35 h--35 border rounded-circle mb-2"
                      >
                        <div
                          class="w--30 h--30 border border-success border-3 rounded-circle"
                        >
                          <img
                            :src="cast.avatar"
                            class="img-cover rounded-circle cast-avatar"
                          />
                        </div>
                      </div>
                      <p class="text-success fs-18 mb-3">{{ cast.name }}</p>
                      <p class="mb-0">as {{ cast.character }}</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <!-- Movie crew -->
              <div class="movies-crew">
                <div
                  class="pb-2 border-0 border-bottom border-dashed mb-8 position-relative"
                >
                  <p class="text-white text-uppercase fs-24 fwb mb-0">crew</p>
                  <div class="swiper-prev-crew flex-center">
                    <i
                      class="fad fa-chevron-double-left fs-20 text-success"
                    ></i>
                  </div>
                  <div class="swiper-next-crew flex-center">
                    <i
                      class="fad fa-chevron-double-right fs-20 text-success"
                    ></i>
                  </div>
                </div>

                <Swiper class="swiper" :options="swiperCrewOptions">
                  <SwiperSlide
                    v-for="(crew, index) in movieDetail.crews"
                    :key="index"
                  >
                    <div class="d-flex flex-column align-items-center">
                      <div
                        class="flex-center cast-avatar-container w--35 h--35 border rounded-circle mb-2"
                      >
                        <div
                          class="w--30 h--30 border border-success border-3 rounded-circle"
                        >
                          <img
                            :src="crew.avatar"
                            class="img-cover rounded-circle cast-avatar"
                          />
                        </div>
                      </div>
                      <p class="text-success fs-18 mb-3">{{ crew.name }}</p>
                      <p class="mb-0">{{ crew.role }}</p>
                    </div>
                  </SwiperSlide>
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
import { getModule } from 'vuex-module-decorators'
import Movie from '@/store/modules/Movie'
import store from '@/store'

const MovieModule = getModule(Movie, store)

@Component({
  components: {
    Banner,
    ModalTrailer
  }
})
export default class MovieDetail extends Vue {
  private currentType: string = 'summary'
  private movieDetail: any = {}
  private commonOptions = {
    initialSlide: 0,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10
  }

  private swiperPhotoOptions = {
    ...this.commonOptions,
    autoplay: {
      delay: 2000,
      stopOnLastSlide: false,
      disableOnInteraction: false
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  }

  private swiperCastOptions = {
    ...this.commonOptions,
    navigation: {
      nextEl: '.swiper-next-cast',
      prevEl: '.swiper-prev-cast'
    },

    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  }

  private swiperCrewOptions = {
    ...this.commonOptions,
    navigation: {
      nextEl: '.swiper-next-crew',
      prevEl: '.swiper-prev-crew'
    },

    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      576: {
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

  changeType(type: string): void {
    if (type === 'summary') {
      this.currentType = 'summary'
    } else {
      this.currentType = 'userReview'
    }
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

  goToTicketPlan(): void {
    MovieModule.HANDLE_MOVIE_DETAIL(this.movieDetail)
    this.$router.push({ name: 'ticket-plan' })
  }
}
</script>
