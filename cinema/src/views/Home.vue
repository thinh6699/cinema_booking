<template>
  <div class="home-page">
    <Banner :bg_url="require('@/assets/images/banner-home.jpg')">
      <h1 class="text-white text-uppercase fwb fs-36 fs-lg-80 mb-4">
        book your tickets for <span class="text-success">movies</span>
      </h1>
      <p class="fs-20 fs-lg-28 fwb-500 mb-0">
        Safe, secure, reliable ticketing.Your ticket to live entertainment!
      </p>
    </Banner>
    <div class="py-20">
      <div class="container">
        <div
          class="d-flex flex-column justify-content-center search-container p-7"
        >
          <div class="row align-items-center position-relative">
            <!-- Title and introduction -->
            <div class="text-uppercase text-center col-lg-6">
              <h5 class="text-success">welcome to thinh6699</h5>
              <p class="fwb text-white fs-22">what are you looking for</p>
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
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Banner from '@/components/Banner.vue'
import DatePicker from 'vue2-datepicker'
import moment from 'moment'

@Component({
  components: { Banner, DatePicker }
})
export default class Home extends Vue {
  private dateSearch: string = ''
  private inputSearch: string = ''
  private type: string = 'Movies'

  searchData(): void {
    const data = {
      dateSearch: this.dateSearch
        ? moment(this.dateSearch).format('DD/MM/YYYY')
        : '',
      inputSearch: this.inputSearch
    }
    console.log(data)
  }

  changeSearchType(type: string): void {
    if (type === 'Movies') {
      this.type = 'Movies'
    }

    if (type === 'Event') {
      this.type = 'Event'
    }
  }
}
</script>
