import { IMovie } from '../../models/index';
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'movie' })
class Movie extends VuexModule {
  movieDetail: IMovie = {
    id: 0,
    name: '',
    poster: '',
    background: '',
    date: '',
    duration: '',
    format: '',
    rotten_tomato_rating: 0,
    like: 0,
    category: []
  }

  @Mutation
  handleMovieDetail(movieDetail: any) {
    this.movieDetail = movieDetail
  }

  @Action({ rawError: true })
  HANDLE_MOVIE_DETAIL(movieDetail: any) {
    this.context.commit('handleMovieDetail', movieDetail)
  }


}

export default Movie
