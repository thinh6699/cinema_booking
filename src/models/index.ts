export class ICategory {
  id!: number
  name: string = ''
  constructor(init?: Partial<ICategory>) {
    Object.assign(this, init)
  }
}

export class ICastCrew {
  avatar: string = ''
  name: string = ''
  role: string = ''
  constructor(init?: Partial<ICastCrew>) {
    Object.assign(this, init)
  }
}

export class IMovie {
  id!: number
  name: string = ''
  poster: string = ''
  background: string = ''
  date: string = ''
  duration: string = ''
  format: string[] = []
  rotten_tomato_rating: number = 0
  like: number = 0
  category: ICategory[] = []
  photos: string[] = []
  casts: ICastCrew[] = []
  crews: ICastCrew[] = []
  constructor(init?: Partial<IMovie>) {
    Object.assign(this, init)
  }
}

export class ILanguage {
  code: string = ''
  text: string = ''
  constructor(init?: Partial<ILanguage>) {
    Object.assign(this, init)
  }
}

export class IFood {
  id!: number
  background: string = ''
  name: string = ''
  price!: number
  discount!: number
  quantity!: number
  discountPrice?: number = 0
  type!: number
  constructor(init?: Partial<IFood>) {
    Object.assign(this, init)
  }
}

export class ISeatDetail {
  number!: number
  choosen: boolean = false
  name: string = ''
  isChecked: boolean = false
  constructor(init?: Partial<ISeatDetail>) {
    Object.assign(this, init)
  }
}

export class ISeat {
  type: string = ''
  detail: ISeatDetail[] = []
  price!: number
  constructor(init?: Partial<ISeat>) {
    Object.assign(this, init)
  }
}

export class IMealType {
  type!: number
  name: string = ''
  constructor(init?: Partial<IMealType>) {
    Object.assign(this, init)
  }
}

export class IPaymentOption {
  name: string = ''
  value!: number
  avatar: string = ''
  constructor(init?: Partial<IPaymentOption>) {
    Object.assign(this, init)
  }
}

export interface SignUpForm {
  full_name: string
  email: string
  password: string
  confirm_password?: string
  address: string
  phone_number: string
  accept_term?: boolean
}
