<template>
  <div class="movie-detail">
    <Banner :bg_url="movieDetail.background">
      <h1 class="text-white text-uppercase fwb fs-36 fs-lg-60 mb-4">
        get <span class="text-success">movies</span> ticket
      </h1>
      <p class="fs-20 fs-lg-28 fwb-500 mb-0">
        Safe, secure, reliable ticketing.Your ticket to live entertainment!
      </p>
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
