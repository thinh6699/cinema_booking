<template>
  <div class="movie-detail">
    <Banner :bg_url="movieDetail.background">
      <div class="text-start">
        <p class="fs-22 text-white mb-6">{{ movieDetail.name }}</p>
        <div class="d-flex align-items-center mb-4">
          <div
            v-for="category in movieDetail.category"
            :key="category.id"
            class="minw--25 rounded-pill border p-2 border-light-shade text-center me-3"
          >
            {{ category.name }}
          </div>
        </div>
        <div class="d-md-flex justify-content-between">
          <div class="release-time d-flex align-items-center">
            <div class="d-flex align-items-center me-3">
              <i class="fs-19 fal fa-calendar-alt me-1"></i>
              <span> {{ moment(movieDetail.date).format('DD/MM/YYYY') }}</span>
            </div>
            <div class="d-flex align-items-center"></div>
          </div>
          <div class="social-contact"></div>
        </div>
      </div>
    </Banner>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
import Banner from '@/components/Banner.vue'

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
    axios
      .get(
        `https://609b82962b549f00176e394f.mockapi.io/movies/${this.$route.params.filmId}`
      )
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
