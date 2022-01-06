export interface ICategory {
  id: number
  name: string
}

export interface IMovie {
  id: number
  name: string,
  poster: string,
  background: string,
  date: string,
  duration: string,
  format: string,
  rotten_tomato_rating: number
  like: number,
  category: ICategory[]
}