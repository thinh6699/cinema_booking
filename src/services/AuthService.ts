import { SignUpForm } from '@/models/index'
import base from './base'

export const register = (payload: SignUpForm) => {
  return base.post('/sign-up', payload)
}
