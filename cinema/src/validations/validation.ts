import { extend, configure } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

// install rules and localization
for (const [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation
  })
}

extend('maxLength', {
  params: ['max'],
  validate(value, event: any) {
    return !(value.length > event.max)
  }
})

extend('email', {
  validate(value) {
    const emailRegex = /^(?=[^@]*[A-Za-z])([a-zA-Z0-9])(([a-zA-Z0-9])*([._-])?([a-zA-Z0-9]))*@(([a-zA-Z0-9-])+(\.))+([a-zA-Z]{2,4})+$/
    return emailRegex.test(value)
  }
})

extend('betweenPassword', {
  params: ['min', 'max'],
  validate(value, event: any) {
    return value.length >= event.min && value.length <= event.max
  }
})

extend('password', {
  params: ['target'],
  validate(value, target: any) {
    return value === target.target
  },
  message: 'Mật khẩu không trùng khớp'
})