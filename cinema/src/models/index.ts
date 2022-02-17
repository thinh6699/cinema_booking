export interface ICategory {
  id: number
  name: string
}

export interface ICastCrew {
  avatar: string
  name: string
  role: string
}

export interface IMovie {
  id: number
  name: string
  poster: string
  background: string
  date: string
  duration: string
  format: string[]
  rotten_tomato_rating: number
  like: number
  category: ICategory[]
  photos: string[]
  casts: ICastCrew[]
  crews: ICastCrew[]
}

export interface ILanguage {
  code: string
  text: string
}

export interface IFood {
  id: number
  background?: string
  name: string
  price: number
  discount?: number
  quantity: number
  type: number
}

export interface ISeatDetail {
  number: number
  choosen: boolean
  name: string
  isChecked: boolean
}

export interface ISeat {
  type: string
  detail: ISeatDetail[]
  price: number
}

export interface IMealType {
  type: number
  name: string
}

export interface IPaymentOption {
  name: string
  value: number
  avatar: string
}