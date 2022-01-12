<template>
  <div class="home-page">
    <!-- Banner Section -->
    <Banner :bg_url="require('@/assets/images/banner-home.jpg')">
      <h1 class="text-white text-uppercase fwb fs-36 fs-lg-80 mb-4">
        book your tickets for <span class="text-success">movies</span>
      </h1>
      <p class="fs-20 fs-lg-28 fwb-500 mb-0">
        Safe, secure, reliable ticketing.Your ticket to live entertainment!
      </p>
    </Banner>

    <!-- Search Section -->
    <div class="pt-20 mb-20">
      <div class="container">
        <div
          class="d-flex flex-column justify-content-center search-container p-7"
        >
          <div class="row align-items-center position-relative">
            <!-- Title and introduction -->
            <div class="text-center col-lg-6">
              <h5 class="text-success">WELCOME TO THINH6699</h5>
              <p class="fwb text-white fs-22">WHAT ARE YOU LOOKING FOR?</p>
            </div>

            <ul class="list-unstyled mb-2 col-lg-6">
              <div class="d-md-flex align-items-center justify-content-center">
                <!-- Change type to Movies -->
                <li
                  class="bg-info-tint-1 h--14 w--40 rounded-pill text-white fwb mx-auto flex-center cursor-pointer mb-3 me-md-2 ms-md-2"
                  :class="type === 'Movies' ? 'btn-gradient' : ''"
                  @click="changeSearchType('Movies')"
                >
                  <img
                    src="@/assets/images/movie.png"
                    alt="movie-icon"
                    class="me-1"
                  />
                  <span class="text-white">MOVIES</span>
                </li>

                <!-- Change type to Event -->
                <li
                  class="bg-info-tint-1 h--14 w--40 rounded-pill text-white fwb mx-auto cursor-pointer flex-center mb-3 me-md-2 ms-md-2"
                  :class="type === 'Event' ? 'btn-gradient' : ''"
                  @click="changeSearchType('Event')"
                >
                  <img
                    src="@/assets/images/event.png"
                    alt="event-icon"
                    class="me-1"
                  />
                  <span class="text-white">EVENT</span>
                </li>
              </div>
            </ul>
          </div>

          <div class="search-input-condition d-md-flex position-relative">
            <!-- Search by input -->
            <div class="position-relative mb-3 me-md-5 flex-1">
              <input
                class="search-input px-2 outline-0"
                type="text"
                :placeholder="`Search for ${type}`"
                v-model="inputSearch"
                @keyup.enter="searchData"
              />
              <i
                class="far fa-search position-absolute end-0 top-50 translate-middle-y p-3 cursor-pointer"
                @click="searchData"
              ></i>
            </div>

            <!-- Search by date -->
            <div class="px-2 d-flex align-items-center mb-3">
              <img
                src="@/assets/images/date-condition.png"
                alt="date-condition"
                class="me-3"
              />
              <span class="text-success me-3">Date</span>
              <div class="date-picker">
                <date-picker
                  id="date_search"
                  v-model="dateSearch"
                  placeholder="DD/MM/YYYY"
                  type="date"
                  format="DD/MM/YYYY"
                  input-class="rounded-pill mx-input text-center bg-transparent text-white border-light-shade"
                  class="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Movie Section -->
    <div class="movie-section mb-20">
      <div class="container">
        <div class="d-flex flex-column justify-content-center p-7">
          <div class="row align-items-center">
            <!-- Movies Title -->
            <div class="text-center col-lg-6">
              <h1 class="text-white">MOVIES</h1>
              <p class="mb-7">Be sure not to miss these Movies today</p>
            </div>

            <ul class="list-unstyled mb-2 col-lg-6">
              <div class="d-md-flex align-items-center justify-content-center">
                <!-- Now showing movie -->
                <li
                  class="bg-info-tint-1 h--14 w--50 rounded-pill text-white fwb mx-auto flex-center cursor-pointer mb-3 me-md-2 ms-md-2"
                  :class="movieType === 'nowShowing' ? 'btn-gradient' : ''"
                  @click="changeMovieType('nowShowing')"
                >
                  <img
                    src="@/assets/images/movie.png"
                    alt="movie-icon"
                    class="me-1"
                  />
                  <span class="text-white">NOW SHOWING</span>
                </li>

                <!-- Coming soon movie -->
                <li
                  class="bg-info-tint-1 h--14 w--50 rounded-pill text-white fwb mx-auto cursor-pointer flex-center mb-3 me-md-2 ms-md-2"
                  :class="movieType === 'upComing' ? 'btn-gradient' : ''"
                  @click="changeMovieType('upComing')"
                >
                  <img
                    src="@/assets/images/event.png"
                    alt="event-icon"
                    class="me-1"
                  />
                  <span class="text-white">COMING SOON</span>
                </li>
              </div>
            </ul>
          </div>

          <!-- List Movie -->
          <div class="list-movies">
            <Swiper
              class="swiper"
              :options="swiperOption"
              v-if="listMovieComputed.length"
            >
              <SwiperSlide
                v-for="movie in listMovieComputed"
                :key="movie.id"
                class="h-unset"
              >
                <div
                  class="mw--75 mx-auto rounded-bottom bg-dark-tint-1 d-flex flex-column w-100 h-100"
                >
                  <figure
                    class="mb-0 h--100 cursor-pointer"
                    @click="goToMovieDetail(movie)"
                  >
                    <img
                      :src="movie.poster"
                      alt="The Matrix Resurrections"
                      class="rounded-top img-cover"
                    />
                  </figure>
                  <div
                    class="mb-0 fs-18 text-white mx-4 py-5 border-bottom flex-1 d-flex flex-column"
                  >
                    <p
                      class="flex-1 cursor-pointer"
                      @click="goToMovieDetail(movie)"
                    >
                      {{ movie.name }}
                    </p>
                    <span class="fs-16"
                      ><span class="text-success me-2">Release Date:</span>
                      {{ moment(movie.date).format('DD/MM/YYYY') }}</span
                    >
                  </div>
                  <div class="d-flex align-items-center px-4 py-5">
                    <div class="d-flex align-items-center me-3">
                      <img
                        src="@/assets/images/tomato.png"
                        alt=""
                        class="me-1"
                      />
                      <span>{{ `${movie.rotten_tomato_rating}%` }}</span>
                    </div>
                    <div class="d-flex align-items-center">
                      <img src="@/assets/images/cake.png" alt="" class="me-1" />
                      <span>{{ `${movie.like}%` }}</span>
                    </div>
                    <span class="ms-auto text-success cursor-pointer"
                      >More</span
                    >
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>

    <!-- Event Section -->
    <div class="movie-section mb-20">
      <div class="container">
        <div class="d-flex flex-column justify-content-center p-7">
          <div class="row align-items-center">
            <!-- event Title -->
            <div class="text-center col-lg-6">
              <h1 class="text-white">EVENTS</h1>
              <p class="mb-7">Be sure not to miss these Event today</p>
            </div>

            <ul class="list-unstyled mb-2 col-lg-6">
              <div class="d-md-flex align-items-center justify-content-center">
                <!-- Now showing event -->
                <li
                  class="bg-info-tint-1 h--14 w--50 rounded-pill text-white fwb mx-auto flex-center cursor-pointer mb-3 me-md-2 ms-md-2"
                  :class="movieType === 'nowShowing' ? 'btn-gradient' : ''"
                  @click="changeMovieType('nowShowing')"
                >
                  <img
                    src="@/assets/images/movie.png"
                    alt="movie-icon"
                    class="me-1"
                  />
                  <span class="text-white">NOW SHOWING</span>
                </li>

                <!-- Coming soon event -->
                <li
                  class="bg-info-tint-1 h--14 w--50 rounded-pill text-white fwb mx-auto cursor-pointer flex-center mb-3 me-md-2 ms-md-2"
                  :class="movieType === 'upComing' ? 'btn-gradient' : ''"
                  @click="changeMovieType('upComing')"
                >
                  <img
                    src="@/assets/images/event.png"
                    alt="event-icon"
                    class="me-1"
                  />
                  <span class="text-white">COMING SOON</span>
                </li>
              </div>
            </ul>
          </div>

          <!-- List Events -->
          <div class="list-events">
            <Swiper
              class="swiper"
              :options="swiperOption"
              v-if="listMovieComputed.length"
            >
              <SwiperSlide
                v-for="movie in listMovieComputed"
                :key="movie.id"
                class="h-unset"
              >
                <div
                  class="mw--75 mx-auto rounded-bottom bg-dark-tint-1 d-flex flex-column w-100 h-100"
                >
                  <figure
                    class="mb-0 h--100 cursor-pointer"
                    @click="goToMovieDetail(movie)"
                  >
                    <img
                      :src="movie.poster"
                      alt="The Matrix Resurrections"
                      class="rounded-top img-cover"
                    />
                  </figure>
                  <div
                    class="mb-0 fs-18 text-white mx-4 py-5 border-bottom flex-1 d-flex flex-column"
                  >
                    <p
                      class="flex-1 cursor-pointer"
                      @click="goToMovieDetail(movie)"
                    >
                      {{ movie.name }}
                    </p>
                    <span class="fs-16"
                      ><span class="text-success me-2">Release Date:</span>
                      {{ moment(movie.date).format('DD/MM/YYYY') }}</span
                    >
                  </div>
                  <div class="d-flex align-items-center px-4 py-5">
                    <div class="d-flex align-items-center me-3">
                      <img
                        src="@/assets/images/tomato.png"
                        alt=""
                        class="me-1"
                      />
                      <span>{{ `${movie.rotten_tomato_rating}%` }}</span>
                    </div>
                    <div class="d-flex align-items-center">
                      <img src="@/assets/images/cake.png" alt="" class="me-1" />
                      <span>{{ `${movie.like}%` }}</span>
                    </div>
                    <span class="ms-auto text-success cursor-pointer"
                      >More</span
                    >
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import Banner from '@/components/Banner.vue'
import DatePicker from 'vue2-datepicker'
import moment from 'moment'
import VueSlickCarousel from 'vue-slick-carousel'
import { IMovie } from '@/models/index'
import MovieService from '@/services/MovieService'

@Component({
  components: { Banner, DatePicker, VueSlickCarousel }
})
export default class Home extends Vue {
  private currentDay: number = moment.now()
  private dateSearch: string = ''
  private inputSearch: string = ''
  private type: string = 'Movies'
  private movieType: string = 'nowShowing'
  private swiperOption = {
    initialSlide: 0,
    loop: true,
    autoplay: {
      delay: 2000,
      stopOnLastSlide: false,
      disableOnInteraction: false
    },
    slidesPerView: 1,
    spaceBetween: 10,
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
  private listMovieComputed: IMovie[] = []
  private listMovie: IMovie[] = []

  created(): void {
    this.getListMovie()
  }

  getListMovie(): void {
    MovieService.getAllMovies()
      .then((response: any) => {
        if (response.status === 200) {
          this.listMovie = response.data
          this.listMovieComputed = this.listMovie.filter(
            (item: IMovie) => moment(item.date).valueOf() <= this.currentDay
          )
        }
      })
      .catch((error: any) => {
        console.log(error)
      })
  }

  searchData(): void {
    if (!this.inputSearch && !this.dateSearch) {
      if (this.movieType === 'nowShowing') {
        this.listMovieComputed = this.listMovie.filter(
          (item: IMovie) => moment(item.date).valueOf() <= this.currentDay
        )
      }
      if (this.movieType === 'upComing') {
        this.listMovieComputed = this.listMovie.filter(
          (item: IMovie) => moment(item.date).valueOf() > this.currentDay
        )
      }
    } else if (!this.inputSearch) {
      this.listMovieComputed = this.listMovie.filter(
        (item: IMovie) =>
          item.date === moment(this.dateSearch).format('YYYY/MM/DD') &&
          (this.movieType === 'nowShowing'
            ? moment(item.date).valueOf() <= this.currentDay
            : moment(item.date).valueOf() > this.currentDay)
      )
    } else if (!this.dateSearch) {
      this.listMovieComputed = this.listMovie.filter(
        (item: IMovie) =>
          item.name.toLowerCase().match(this.inputSearch.toLowerCase()) &&
          (this.movieType === 'nowShowing'
            ? moment(item.date).valueOf() <= this.currentDay
            : moment(item.date).valueOf() > this.currentDay)
      )
    } else if (this.inputSearch && this.dateSearch) {
      this.listMovieComputed = this.listMovie.filter(
        (item: IMovie) =>
          item.name.toLowerCase().match(this.inputSearch.toLowerCase()) &&
          item.date === moment(this.dateSearch).format('YYYY/MM/DD')
      )
    }
  }

  changeSearchType(type: string): void {
    if (type === 'Movies') {
      this.type = 'Movies'
    }

    if (type === 'Event') {
      this.type = 'Event'
    }
  }

  changeMovieType(type: string): void {
    if (type === 'nowShowing') {
      this.movieType = 'nowShowing'
      this.listMovieComputed = this.listMovie.filter(
        (item: IMovie) => moment(item.date).valueOf() <= this.currentDay
      )
    }

    if (type === 'upComing') {
      this.movieType = 'upComing'
      this.listMovieComputed = this.listMovie.filter(
        (item: IMovie) => moment(item.date).valueOf() > this.currentDay
      )
    }
  }

  goToMovieDetail(movie: IMovie): void {
    this.$router.push({
      name: 'movie-detail',
      params: { movieId: `${movie.id}` }
    })
  }
}
</script>
