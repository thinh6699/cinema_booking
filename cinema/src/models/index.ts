export interface ICategory {
  id: number
  name: string
}

export interface IFilm {
  id: number
  name: string
  background: string
  date: string,
  duration: string,
  rotten_tomato_rating: number
  like: number,
  category: ICategory[]
}