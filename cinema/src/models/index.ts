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

export interface ILanguage {
  code: string
  text: string
}

export interface IFood {
  id: number,
  background?: string,
  name: string,
  price: number,
  discount?: number,
  quantity: number,
  type: string,
}

export interface ISeatDetail {
  number: number,
  choosen: boolean,
  name: string,
  isChecked: boolean
}

export interface ISeat {
  type: string,
  detail: ISeatDetail[],
  price: number
}