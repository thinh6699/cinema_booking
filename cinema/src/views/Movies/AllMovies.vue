<template>
  <div class="all-movies">
    <!-- Banner Section -->
    <Banner :bg_url="require('@/assets/images/banner-film-section.jpg')">
      <h1 class="text-white text-uppercase fwb fs-36 fs-lg-80 mb-4">
        {{ $t('all_movies.get') }}
        <span
          :class="$store.state.language.code === 'en' ? 'text-success' : ''"
          class="me-6"
          >{{ $t('all_movies.movie') }}</span
        >
        <span
          :class="$store.state.language.code === 'en' ? '' : 'text-success'"
          >{{ $t('all_movies.ticket') }}</span
        >
      </h1>
      <p class="fs-20 fs-lg-28 fwb-500 mb-0">
        {{ $t('home.message') }}
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
            <div class="text-center col-lg-4">
              <h5 class="text-success text-uppercase">
                {{ $t('signup.welcome_to') }} thinh6699
              </h5>
              <p class="fwb text-uppercase text-white fs-22">
                {{ $t('all_movies.looking_for') }}
              </p>
            </div>

            <div class="col-lg-8">
              <div class="search-input-condition d-md-flex position-relative">
                <!-- Search by input -->
                <div class="position-relative mb-3 me-md-5 flex-1">
                  <input
                    class="search-input px-2 outline-0"
                    type="text"
                    :placeholder="`${$t('home.search_for')} Movies`"
                    v-model="movieSearch"
                    @keyup.enter="searchMovies"
                  />
                  <i
                    class="far fa-search position-absolute end-0 top-50 translate-middle-y p-3 cursor-pointer"
                    @click="searchMovies"
                  ></i>
                </div>

                <!-- Search by date -->
                <div class="px-2 d-flex align-items-center mb-3">
                  <img
                    src="@/assets/images/date-condition.png"
                    alt="date-condition"
                    class="me-3"
                  />
                  <span class="text-success me-3">{{ $t('home.date') }}</span>
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
      </div>
    </div>

    <!-- List Movies Section -->
    <div class="list-movies mb-20">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="movies-sidebar mb-8">
              <figure class="d-block">
                <img src="@/assets/images/advertising1.jpg" class="img-cover" />
              </figure>

              <!-- Fiter by -->
              <div class="filter-by">
                <div
                  class="d-flex justify-content-between align-items-center mb-4"
                >
                  <span class="text-white fs-20">{{
                    $t('all_movies.filter_by')
                  }}</span>
                  <span
                    class="text-danger fs-16 cursor-pointer"
                    @click="clearAllFilter"
                    >{{ $t('all_movies.clear_all') }}</span
                  >
                </div>

                <!-- Experience -->
                <div
                  class="fiter-by-experience px-6 rounded bg-dark-tint-1 mb-8"
                >
                  <h5 class="mb-0 py-6 border-bottom text-uppercase text-white">
                    {{ $t('all_movies.experience') }}
                  </h5>
                  <div class="py-6">
                    <div
                      v-for="(experience, index) in listExperience"
                      :key="experience.id"
                      class="d-flex align-items-center"
                      :class="index !== listExperience.length - 1 ? 'mb-6' : ''"
                    >
                      <input
                        type="checkbox"
                        :id="experience.id"
                        v-model="experienceChecked"
                        :value="experience.id"
                        class="w--4 h--4 me-2 bg-transparent"
                      />
                      <label :for="experience.id" class="fs-16">
                        {{ experience.name }}
                      </label>
                    </div>
                  </div>
                </div>

                <!--Category  -->
                <div class="fiter-by-experience px-6 rounded bg-dark-tint-1">
                  <h5 class="mb-0 py-6 border-bottom text-uppercase text-white">
                    {{ $t('all_movies.category') }}
                  </h5>
                  <div class="py-6">
                    <div
                      v-for="(category, index) in listCategory"
                      :key="category.id"
                      class="d-flex align-items-center"
                      :class="index !== listCategory.length - 1 ? 'mb-6' : ''"
                    >
                      <input
                        type="checkbox"
                        :id="category.id"
                        v-model="categoryChecked"
                        :value="category.id"
                        class="w--4 h--4 me-2 bg-transparent"
                      />
                      <label :for="category.id" class="fs-16">
                        {{ category.name }}</label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- List movies -->
          <div class="col-lg-9">
            <div class="list-movies mb-8">
              <div class="border p-4 rounded mb-8">
                <div
                  class="d-md-flex align-items-center justify-content-between"
                >
                  <div class="d-md-flex align-items-center mb-5 mb-md-0">
                    <div class="d-flex align-items-center me-6 mb-5 mb-md-0">
                      <span class="w--20 flex-fixed pe-2">
                        {{ $t('all_movies.show') }}:</span
                      >
                      <b-dropdown
                        right
                        no-caret
                        variant="light rounded-pill border"
                        menu-class="w-100 minw-unset bg-dark-shade border mt-1"
                      >
                        <template #button-content>
                          <div
                            class="flex-center w--15 minh--5 position-relative px-2"
                          >
                            <span class="pe-5 text-white">{{
                              movieQuantity
                            }}</span>
                            <i
                              class="fas fa-chevron-down fs-14 position-absolute top-50 end--1 translate-middle-y px-2 text-white"
                            />
                          </div>
                        </template>
                        <b-dropdown-item
                          v-for="(quantity, index) in quantitys"
                          :key="index"
                          class="fs-15"
                          @click="changeQuantity(quantity)"
                        >
                          <span class="d-inline-block text-white py-1">{{
                            quantity
                          }}</span>
                        </b-dropdown-item>
                      </b-dropdown>
                    </div>

                    <div class="d-flex align-items-center mb-md-0">
                      <span class="w--30 flex-fixed pe-2"
                        >{{ $t('all_movies.sort_by') }}:</span
                      >
                      <b-dropdown
                        right
                        no-caret
                        variant="light rounded-pill border "
                        menu-class="w-100 minw-unset bg-dark-shade border mt-1"
                      >
                        <template #button-content>
                          <div
                            class="flex-center w--35 minh--5 position-relative px-2"
                          >
                            <span class="pe-7 text-white">{{
                              sortChoose
                            }}</span>
                            <i
                              class="fas fa-chevron-down fs-14 position-absolute top-50 end--1 translate-middle-y px-2 text-white"
                            />
                          </div>
                        </template>
                        <b-dropdown-item
                          v-for="type in movieType"
                          :key="type.id"
                          class="fs-15"
                          @click="changeMovieType(type)"
                        >
                          <span class="d-inline-block text-white py-2">{{
                            type.name
                          }}</span>
                        </b-dropdown-item>
                      </b-dropdown>
                    </div>
                  </div>
                  <span
                    class="btn btn-dark-shade d-inline-block minw--25 border rounded-pill p-2 text-center cursor-pointer"
                    @click="filtered"
                    >{{ $t('all_movies.filter') }}</span
                  >
                </div>
              </div>

              <div class="list-movies">
                <div class="container px-0">
                  <div
                    v-for="movie in listMovie"
                    :key="movie.id"
                    class="row mw--80 mx-auto mw-md-unset mb-8"
                  >
                    <div class="col-md-5 col-xl-4 mb-4 mb-md-0">
                      <figure
                        class="movies-poster h-100 mb-0 cursor-pointer"
                        @click="goToMovieDetail(movie)"
                      >
                        <img v-lazy="movie.poster" class="img-cover" />
                      </figure>
                    </div>
                    <div class="col-md-7 col-xl-8">
                      <div class="d-flex flex-column h-100">
                        <!-- Movies description -->
                        <div
                          class="movies-decription d-flex flex-column mb-8 flex-1"
                        >
                          <p
                            class="text-white fs-20 cursor-pointer"
                            @click="goToMovieDetail(movie)"
                          >
                            {{ movie.name }}
                          </p>
                          <p class="text-success flex-1">
                            {{ movie.duration }}
                          </p>
                          <div class="mb-4">
                            <span
                              v-for="(category, index) in movie.category"
                              :key="category.id"
                              class="pe-3 border-white border-2"
                              :class="[
                                index !== movie.category.length - 1
                                  ? 'border-end'
                                  : '',
                                index !== 0 ? 'ps-3' : ''
                              ]"
                              >{{ category.name }}</span
                            >
                          </div>
                          <div class="mb-4">
                            <span class="text-success me-2"
                              >{{ $t('all_movies.format') }}:</span
                            >
                            <span>{{ handleMovieFormat(movie.format) }}</span>
                          </div>
                          <p>
                            <span class="text-success me-2"
                              >{{ $t('home.release_date') }}:</span
                            >
                            {{ moment(movie.date).format('DD/MM/YYYY') }}
                          </p>
                          <div
                            class="d-flex align-items-center mb-2 mb-md-4 pt-md-8"
                          >
                            <img
                              src="@/assets/images/tomato.png"
                              class="me-3"
                            />
                            <span>{{ `${movie.rotten_tomato_rating}%` }}</span>
                          </div>
                          <div class="d-flex align-items-center">
                            <img src="@/assets/images/cake.png" class="me-3" />
                            <span>{{ `${movie.like}%` }}</span>
                          </div>
                        </div>

                        <!-- Movies booking -->
                        <div
                          class="d-md-flex justify-content-between align-items-center movies-booking py-4 border-top border-bottom"
                        >
                          <div
                            @click="goToTicketPlan(movie)"
                            class="d-flex align-items-center mb-3 mb-md-0 cursor-pointer"
                          >
                            <div
                              class="flex-center w--9 h--9 me-2 p-2 bg-dark-tint-1 rounded-circle"
                            >
                              <img
                                src="@/assets/images/book.png"
                                class="img-contain"
                              />
                            </div>
                            <span class="text-white">{{
                              $t('all_movies.book_ticket')
                            }}</span>
                          </div>
                          <div
                            class="d-flex align-items-center cursor-pointer"
                            @click="goToMovieDetail(movie, true)"
                          >
                            <div
                              class="flex-center w--9 h--9 me-2 p-2 bg-dark-tint-1 rounded-circle"
                            >
                              <img
                                src="@/assets/images/play-button.png"
                                class="img-contain"
                              />
                            </div>
                            <span class="text-white">{{
                              $t('all_movies.watch_trailer')
                            }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
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
import DatePicker from 'vue2-datepicker'
import { IMovie, ICategory } from '@/models/index'
import MovieService from '@/services/MovieService'
import { getModule } from 'vuex-module-decorators'
import Movie from '@/store/modules/Movie'
import store from '@/store'

const MovieModule = getModule(Movie, store)

@Component({
  components: { Banner, DatePicker }
})
export default class AllMovies extends Vue {
  private dateSearch: string = ''
  private movieSearch: string = ''
  private sortChoose: string = 'All'
  private movieQuantity: number = 5
  private categoryChecked: any[] = []
  private experienceChecked: any[] = []
  private quantitys: number[] = [5, 10, 15]
  private listExperience: ICategory[] = [
    {
      id: 5,
      name: '2D'
    },
    {
      id: 6,
      name: '3D'
    },
    {
      id: 7,
      name: 'IMAX'
    }
  ]
  private listCategory: ICategory[] = [
    {
      id: 1,
      name: 'Horror'
    },
    {
      id: 2,
      name: 'Comedy'
    },
    {
      id: 3,
      name: 'Action'
    },
    {
      id: 4,
      name: 'Drama'
    }
  ]
  private movieType: ICategory[] = [
    {
      id: 1,
      name: 'All'
    },
    {
      id: 2,
      name: 'Now Showing'
    },
    {
      id: 3,
      name: 'Up Coming'
    }
  ]

  private listMovieComputed: IMovie[] = []
  private listMovie: IMovie[] = []

  created(): void {
    this.getListMovie()
  }

  searchMovies(): void {
    // search movies
  }

  getListMovie(): void {
    MovieService.getAllMovies()
      .then((response: any) => {
        if (response.status === 200) {
          this.listMovie = response.data
          this.listMovieComputed = this.listMovie
        }
      })
      .catch((error: any) => {
        console.log(error)
      })
  }

  changeQuantity(quantity: number): void {
    this.movieQuantity = quantity
  }

  changeMovieType(type: ICategory): void {
    this.sortChoose = type.name
  }

  filtered(): void {
    const data = {
      experienceChecked: this.experienceChecked,
      categoryChecked: this.categoryChecked,
      movieQuantity: this.movieQuantity,
      sortChoose: this.sortChoose
    }
    console.log(data)
  }

  clearAllFilter(): void {
    this.categoryChecked = []
    this.experienceChecked = []
  }

  goToMovieDetail(movie: IMovie, openTrailer: any): void {
    this.$router.push({
      name: 'movie-detail',
      params: { movieId: `${movie.id}`, openTrailer: openTrailer }
    })
  }

  goToTicketPlan(movie: IMovie): void {
    MovieModule.HANDLE_MOVIE_DETAIL(movie)
    this.$router.push({ name: 'ticket-plan' })
  }

  handleMovieFormat(formats: string[]) {
    return formats.join(', ')
  }
}
</script>
