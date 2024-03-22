import { extend, configure } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import i18n from '@/lang'

configure({
  defaultMessage: (field, values) => {
    // override the field name.
    if (!field.includes('ignore')) {
      values._field_ = i18n.t(`fields.${field}`)
    }
    return i18n.t(`validation.${values._rule_}`, values) as string
  }
})

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
    const emailRegex =
      /^(?=[^@]*[A-Za-z])([a-zA-Z0-9])(([a-zA-Z0-9])*([._-])?([a-zA-Z0-9]))*@(([a-zA-Z0-9-])+(\.))+([a-zA-Z]{2,4})+$/
    return emailRegex.test(value)
  }
})

extend('password', {
  validate(value) {
    const regex =
      /^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!%@#&\-()_[\]{}:;`'",.+*?\\/~$^=<>|\\])[0-9A-Za-z!%@#&\-()_[\]{}:;`'",.+*?\\/~$^=<>|\\]{8,64}$/
    return regex.test(value)
  }
})

extend('confirm_password', {
  params: ['target'],
  validate(value, target: any) {
    return value === target.target
  }
})

extend('accept_term', {
  validate(value: boolean) {
    return value === true
  }
})
