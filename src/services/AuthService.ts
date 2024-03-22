import { AuthenticationForm } from '@/models/index'
import base from './base'

export const register = (payload: AuthenticationForm) => {
  return base.post('/sign-up', payload)
}

export const login = (payload: AuthenticationForm) => {
  return base.post('/login', payload)
}
