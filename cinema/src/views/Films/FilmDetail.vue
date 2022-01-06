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
            class="minw--30 rounded-pill border p-2 border-light-shade text-center me-3"
          >
            {{ category.name }}
          </div>
        </div>
        <div class="d-md-flex justify-content-between" v-if="movieDetail.date">
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
          </ul>
        </div>
      </div>
      <div class="movie-thumbnail rounded">
        <img
          v-lazy="movieDetail.poster"
          :alt="movieDetail.name"
          class="img-cover rounded"
        />
        <a
          class="position-absolute top-50 start-50 translate-middle"
          href="https://www.youtube.com/watch?v=OB3g37GTALc"
          v-if="movieDetail.poster"
        >
          <img src="@/assets/images/video-button.png" />
        </a>
      </div>
    </Banner>

    <!-- Rating section -->
    <div class="py-15 px-4 bg-dark-tint-1">
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
            <div class="d-flex align-items-center fs-18 fs-lg-25">
              <img src="@/assets/images/tomato.png" class="me-1" />
              <span>{{ `${movieDetail.rotten_tomato_rating}%` }}</span>
            </div>
            <span class="fs-lg-22">Rotten Tomatoes</span>
          </div>
          <div
            v-if="movieDetail.like"
            class="d-flex flex-column align-items-center px-3 px-md-5"
          >
            <div class="d-flex align-items-center fs-18 fs-lg-25">
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
    <div class="py-20 px-4 movie-decription">
      <div class="container">123</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Banner from '@/components/Banner.vue'
import MovieService from '@/services/MovieService'

@Component({
  components: {
    Banner
  }
})
export default class FilmDetail extends Vue {
  private movieDetail: any = {}
  created(): void {
    this.getMovieDetail()
  }

  getMovieDetail(): void {
    MovieService.getMovieById(this.$route.params.filmId)
      .then((response: any) => {
        if (response.status === 200) {
          this.movieDetail = response.data
        }
      })
      .catch((error: any) => {
        console.log(error)
      })
  }
}
</script>
