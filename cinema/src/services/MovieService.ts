import axios from 'axios'
import Const from '@/constants'

class MovieService {
  getAllMovies(): Promise<void> {
    return axios.get(Const.api_url + 'movies')
  }

  getMovieById(movieId: any): Promise<void> {
    return axios.get(Const.api_url + `movies/${movieId}`)
  }
}

export default new MovieService()