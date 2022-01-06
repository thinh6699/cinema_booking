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
                <!-- Now showing film -->
                <li
                  class="bg-info-tint-1 h--14 w--50 rounded-pill text-white fwb mx-auto flex-center cursor-pointer mb-3 me-md-2 ms-md-2"
                  :class="filmType === 'nowShowing' ? 'btn-gradient' : ''"
                  @click="changeFilmType('nowShowing')"
                >
                  <img
                    src="@/assets/images/movie.png"
                    alt="movie-icon"
                    class="me-1"
                  />
                  <span class="text-white">NOW SHOWING</span>
                </li>

                <!-- Coming soon film -->
                <li
                  class="bg-info-tint-1 h--14 w--50 rounded-pill text-white fwb mx-auto cursor-pointer flex-center mb-3 me-md-2 ms-md-2"
                  :class="filmType === 'upComing' ? 'btn-gradient' : ''"
                  @click="changeFilmType('upComing')"
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

          <!-- List Film -->
          <VueSlickCarousel v-bind="settings" v-if="listFilmComputed.length">
            <div
              v-for="film in listFilmComputed"
              :key="film.id"
              class="px-3 d-flex h-100"
            >
              <div
                class="mw--80 mx-auto rounded-bottom bg-dark-tint-1 d-flex flex-column w-100 h-100"
              >
                <figure
                  class="mb-0 h--100 cursor-pointer"
                  @click="goToMovieDetail(film)"
                >
                  <img
                    :src="film.poster"
                    alt="The Matrix Resurrections"
                    class="rounded-top img-cover"
                  />
                </figure>
                <div
                  class="mb-0 fs-18 text-white mx-4 py-5 border-bottom flex-1 d-flex flex-column"
                >
                  <p
                    class="flex-1 cursor-pointer"
                    @click="goToMovieDetail(film)"
                  >
                    {{ film.name }}
                  </p>
                  <span class="fs-16"
                    ><span class="text-success me-2">Release Date:</span>
                    {{ moment(film.date).format('DD/MM/YYYY') }}</span
                  >
                </div>
                <div class="d-flex align-items-center px-4 py-5">
                  <div class="d-flex align-items-center me-3">
                    <img src="@/assets/images/tomato.png" alt="" class="me-1" />
                    <span>{{ `${film.rotten_tomato_rating}%` }}</span>
                  </div>
                  <div class="d-flex align-items-center">
                    <img src="@/assets/images/cake.png" alt="" class="me-1" />
                    <span>{{ `${film.like}%` }}</span>
                  </div>
                  <span class="ms-auto text-success cursor-pointer">More</span>
                </div>
              </div>
            </div>
          </VueSlickCarousel>
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
                  :class="filmType === 'nowShowing' ? 'btn-gradient' : ''"
                  @click="changeFilmType('nowShowing')"
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
                  :class="filmType === 'upComing' ? 'btn-gradient' : ''"
                  @click="changeFilmType('upComing')"
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
          <VueSlickCarousel v-bind="settings" v-if="listFilmComputed.length">
            <div
              v-for="film in listFilmComputed"
              :key="film.id"
              class="px-3 d-flex h-100"
            >
              <div
                class="mw--80 mx-auto rounded-bottom bg-dark-tint-1 d-flex flex-column w-100 h-100"
              >
                <figure class="mb-0 h--100">
                  <img
                    :src="film.poster"
                    alt="The Matrix Resurrections"
                    class="rounded-top img-cover"
                  />
                </figure>
                <div
                  class="mb-0 fs-18 text-white mx-4 py-5 border-bottom flex-1 d-flex flex-column"
                >
                  <p class="flex-1">{{ film.name }}</p>
                  <span class="fs-16"
                    ><span class="text-success me-2">Show time:</span>
                    {{ moment(film.date).format('DD/MM/YYYY') }}</span
                  >
                </div>
                <div class="d-flex align-items-center px-4 py-5">
                  <div class="d-flex align-items-center me-3">
                    <img src="@/assets/images/tomato.png" alt="" class="me-1" />
                    <span>{{ `${film.rotten_tomato_rating}%` }}</span>
                  </div>
                  <div class="d-flex align-items-center">
                    <img src="@/assets/images/cake.png" alt="" class="me-1" />
                    <span>{{ `${film.like}%` }}</span>
                  </div>
                  <span class="ms-auto text-success cursor-pointer">More</span>
                </div>
              </div>
            </div>
          </VueSlickCarousel>
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
import { IFilm } from '@/models/index'
import MovieService from '@/services/MovieService'

@Component({
  components: { Banner, DatePicker, VueSlickCarousel }
})
export default class Home extends Vue {
  private currentDay: number = moment.now()
  private dateSearch: string = ''
  private inputSearch: string = ''
  private type: string = 'Movies'
  private filmType: string = 'nowShowing'
  private settings: any
  private listFilmComputed: IFilm[] = []
  private listFilm: IFilm[] = []

  @Watch('listFilmComputed')
  watchListFilmChange(): void {
    this.settings = {
      autoplay: true,
      arrows: false,
      autoplaySpeed: 1500,
      speed: 1000,
      initialSlide: 0,
      slidesToShow: 4,
      slidesToScroll: 1,
      swipe: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
  }

  created(): void {
    this.getListFilm()
    this.watchListFilmChange()
  }

  getListFilm(): void {
    MovieService.getAllMovies()
      .then((response: any) => {
        if (response.status === 200) {
          this.listFilm = response.data
          this.listFilmComputed = this.listFilm.filter(
            (item: IFilm) => moment(item.date).valueOf() <= this.currentDay
          )
        }
      })
      .catch((error: any) => {
        console.log(error)
      })
  }

  searchData(): void {
    if (!this.inputSearch && !this.dateSearch) {
      if (this.filmType === 'nowShowing') {
        this.listFilmComputed = this.listFilm.filter(
          (item: IFilm) => moment(item.date).valueOf() <= this.currentDay
        )
      }
      if (this.filmType === 'upComing') {
        this.listFilmComputed = this.listFilm.filter(
          (item: IFilm) => moment(item.date).valueOf() > this.currentDay
        )
      }
    } else if (!this.inputSearch) {
      this.listFilmComputed = this.listFilm.filter(
        (item: IFilm) =>
          item.date === moment(this.dateSearch).format('YYYY/MM/DD') &&
          (this.filmType === 'nowShowing'
            ? moment(item.date).valueOf() <= this.currentDay
            : moment(item.date).valueOf() > this.currentDay)
      )
    } else if (!this.dateSearch) {
      this.listFilmComputed = this.listFilm.filter(
        (item: IFilm) =>
          item.name.toLowerCase().match(this.inputSearch.toLowerCase()) &&
          (this.filmType === 'nowShowing'
            ? moment(item.date).valueOf() <= this.currentDay
            : moment(item.date).valueOf() > this.currentDay)
      )
    } else if (this.inputSearch && this.dateSearch) {
      this.listFilmComputed = this.listFilm.filter(
        (item: IFilm) =>
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

  changeFilmType(type: string): void {
    if (type === 'nowShowing') {
      this.filmType = 'nowShowing'
      this.listFilmComputed = this.listFilm.filter(
        (item: IFilm) => moment(item.date).valueOf() <= this.currentDay
      )
    }

    if (type === 'upComing') {
      this.filmType = 'upComing'
      this.listFilmComputed = this.listFilm.filter(
        (item: IFilm) => moment(item.date).valueOf() > this.currentDay
      )
    }
  }

  goToMovieDetail(film: IFilm): void {
    this.$router.push({
      name: 'movie-detail',
      params: { movieId: `${film.id}` }
    })
  }
}
</script>
