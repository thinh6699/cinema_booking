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
      </div>
    </div>

    <!-- List Movies Section -->
    <div class="list-movies mb-20">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-lg-3">
            <div class="movies-sidebar">
              <figure class="d-block">
                <img src="@/assets/images/advertising1.jpg" class="img-cover" />
              </figure>

              <!-- Fiter by -->
              <div class="filter-by">
                <div
                  class="d-flex justify-content-between align-items-center mb-4"
                >
                  <span class="text-white fs-20">Fiter By</span>
                  <span class="text-danger fs-18">Clear all</span>
                </div>

                <!-- Experience -->
                <div
                  class="fiter-by-experience px-6 rounded bg-dark-tint-1 mb-8"
                >
                  <h5 class="mb-0 py-6 border-bottom text-white">EXPERIENCE</h5>
                  <div class="py-6">
                    <div class="d-flex align-items-center mb-2">
                      <input
                        type="checkbox"
                        id="2D"
                        class="w--4 h--4 me-2 bg-transparent"
                      />
                      <label for="2D" class="fs-16"> 2D </label>
                    </div>
                    <div class="d-flex align-items-center">
                      <input
                        type="checkbox"
                        id="3D"
                        class="w--4 h--4 me-2 bg-transparent"
                      />
                      <label for="3D" class="fs-16"> 3D </label>
                    </div>
                  </div>
                </div>

                <!--Category  -->
                <div
                  class="fiter-by-experience px-6 rounded bg-dark-tint-1 mb-4"
                >
                  <h5 class="mb-0 py-6 border-bottom text-white">CATEGORY</h5>
                  <div class="py-6">
                    <div class="d-flex align-items-center mb-2">
                      <input
                        type="checkbox"
                        id="2D"
                        class="w--4 h--4 me-2 bg-transparent"
                      />
                      <label for="2D" class="fs-16"> 2D </label>
                    </div>
                    <div class="d-flex align-items-center">
                      <input
                        type="checkbox"
                        id="3D"
                        class="w--4 h--4 me-2 bg-transparent"
                      />
                      <label for="3D" class="fs-16"> 3D </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-9">
            <div class="list-movies">list</div>
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

@Component({
  components: { Banner, DatePicker }
})
export default class AllFilms extends Vue {
  private dateSearch: string = ''
  private movieSearch: string = ''

  searchMovies(): void {
    // search movies
  }
}
</script>
