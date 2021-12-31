<template>
  <div class="all-films">
    <Banner :bg_url="require('@/assets/images/banner-film-section.jpg')">
      <h1 class="text-white text-uppercase fwb fs-36 fs-lg-80 mb-4">
        get <span class="text-success">movies</span> ticket
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
            <div class="text-center col-lg-4">
              <h5 class="text-success">WELCOME TO THINH6699</h5>
              <p class="fwb text-white fs-22">
                WHAT MOVIES ARE YOU LOOKING FOR?
              </p>
            </div>

            <div class="col-lg-8">
              <div class="search-input-condition d-md-flex position-relative">
                <!-- Search by input -->
                <div class="position-relative mb-3 me-md-5 flex-1">
                  <input
                    class="search-input px-2 outline-0"
                    type="text"
                    placeholder="Search for Movies"
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
      </div>
    </div>

    <!-- List Movies Section -->
    <div class="list-movies mb-20">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-lg-3">
            <div class="movies-sidebar mb-8">
              <figure class="d-block">
                <img src="@/assets/images/advertising1.jpg" class="img-cover" />
              </figure>

              <!-- Fiter by -->
              <div class="filter-by">
                <div
                  class="d-flex justify-content-between align-items-center mb-4"
                >
                  <span class="text-white fs-20">Fiter By</span>
                  <span class="text-danger fs-16" @click="filtered"
                    >Clear all</span
                  >
                </div>

                <!-- Experience -->
                <div
                  class="fiter-by-experience px-6 rounded bg-dark-tint-1 mb-8"
                >
                  <h5 class="mb-0 py-6 border-bottom text-white">EXPERIENCE</h5>
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
                  <h5 class="mb-0 py-6 border-bottom text-white">CATEGORY</h5>
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
          <div class="col-md-8 col-lg-9">
            <div class="list-movies mb-8">
              <div class="border p-4 rounded mb-5">
                <div class="d-md-flex align-items-center">
                  <div class="d-flex align-items-center me-6 mb-5 mb-md-0">
                    <span class="w--15 flex-fixed pe-2">Show:</span>
                    <b-dropdown
                      right
                      no-caret
                      variant="light rounded-pill border shadow-none"
                      menu-class="w-100 minw-unset bg-transparent border mt-1"
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
                    <span class="w--20 flex-fixed pe-2">Sort by:</span>
                    <b-dropdown
                      right
                      no-caret
                      variant="light rounded-pill border shadow-none"
                      menu-class="w-100 minw-unset bg-transparent border mt-1"
                    >
                      <template #button-content>
                        <div
                          class="flex-center w--35 minh--5 position-relative px-2"
                        >
                          <span class="pe-7 text-white">{{ sortChoose }}</span>
                          <i
                            class="fas fa-chevron-down fs-14 position-absolute top-50 end--1 translate-middle-y px-2 text-white"
                          />
                        </div>
                      </template>
                      <b-dropdown-item
                        v-for="type in filmType"
                        :key="type.id"
                        class="fs-15"
                        @click="changeFilmType(type)"
                      >
                        <span class="d-inline-block text-white py-2">{{
                          type.name
                        }}</span>
                      </b-dropdown-item>
                    </b-dropdown>
                  </div>
                </div>
              </div>

              <div class="list-movies">
                <div class="container px-0">
                  <div
                    v-for="film in listFilm"
                    :key="film.id"
                    class="row mw--75 mx-auto mw-md-unset"
                  >
                    <div class="col-md-4">
                      <figure class="movies-poster h--100">
                        <img :src="film.background" class="img-cover" />
                      </figure>
                    </div>
                    <div class="col-md-8">
                      <div class="movies-decription">
                        <p class="text-white fs-20 mb-2">{{ film.name }}</p>
                        <p class="text-success mb-2">{{ film.duration }}</p>
                        <span
                          v-for="(category, index) in film.category"
                          :key="category.id"
                          class="d-inline-block pe-3 border-white border-2 mb-2"
                          :class="[
                            index !== film.category.length - 1
                              ? 'border-end'
                              : '',
                            index !== 0 ? 'ps-3' : ''
                          ]"
                          >{{ category.name }}</span
                        >
                        <p class="mb-2">
                          <span class="text-success me-2">Release Date:</span>
                          {{ moment(film.date).format('DD/MM/YYYY') }}
                        </p>
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
import { IFilm, ICategory } from '@/models/index'
import moment from 'moment'

@Component({
  components: { Banner, DatePicker }
})
export default class AllFilms extends Vue {
  private dateSearch: string = ''
  private movieSearch: string = ''
  private sortChoose: string = 'All'
  private movieQuantity: number = 5
  private categoryChecked: any = []
  private experienceChecked: any = []
  private quantitys: number[] = [5, 10, 15]
  private listExperience: ICategory[] = [
    {
      id: 5,
      name: '2D'
    },
    {
      id: 6,
      name: '3D'
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
  private filmType: ICategory[] = [
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
      name: 'Trending'
    }
  ]

  private listFilm: IFilm[] = [
    {
      id: 1,
      name: 'The Matrix Resurrections',
      background: require('@/assets/images/matrix.jpg'),
      date: '2021/12/26',
      duration: '2hrs 50 min',
      rotten_tomato_rating: 85,
      like: 90,
      category: [
        {
          id: 3,
          name: 'Action'
        }
      ]
    },
    {
      id: 2,
      name: 'Spider-Man: No Way Home',
      background: require('@/assets/images/no-way-home.jpg'),
      date: '2021/12/26',
      duration: '2hrs 40 min',
      rotten_tomato_rating: 90,
      like: 100,
      category: [
        {
          id: 2,
          name: 'Comedy'
        },
        {
          id: 3,
          name: 'Action'
        }
      ]
    },
    {
      id: 3,
      name: 'Doctor Strange in the Multiverse of Madness',
      background: require('@/assets/images/dr-strange.jpg'),
      date: '2021/12/27',
      duration: '2hrs 15 min',
      rotten_tomato_rating: 90,
      like: 90,
      category: [
        {
          id: 1,
          name: 'Horror'
        },
        {
          id: 3,
          name: 'Action'
        }
      ]
    },
    {
      id: 4,
      name: 'Eternals',
      background: require('@/assets/images/eternals.png'),
      date: '2021/12/28',
      rotten_tomato_rating: 85,
      duration: '2hrs 50 min',
      like: 95,
      category: [
        {
          id: 3,
          name: 'Action'
        }
      ]
    },
    {
      id: 5,
      name: 'The Batman',
      background: require('@/assets/images/batman.jpg'),
      date: '2022/03/08',
      duration: '2hrs 50 min',
      rotten_tomato_rating: 85,
      like: 95,
      category: [
        {
          id: 3,
          name: 'Action'
        }
      ]
    },
    {
      id: 6,
      name: 'Fantastic Beasts: The Secrets of Dumbledore',
      background: require('@/assets/images/fanstatic.jpg'),
      date: '2022/03/20',
      duration: '2hrs 50 min',
      rotten_tomato_rating: 85,
      like: 95,
      category: [
        {
          id: 3,
          name: 'Action'
        }
      ]
    }
  ]

  searchMovies(): void {
    // search movies
  }

  filtered(): void {
    const data = {
      experienceChecked: this.experienceChecked,
      categoryChecked: this.categoryChecked
    }
    console.log(data)
  }

  changeQuantity(quantity: number): void {
    this.movieQuantity = quantity
  }

  changeFilmType(type: ICategory): void {
    this.sortChoose = type.name
  }
}
</script>
