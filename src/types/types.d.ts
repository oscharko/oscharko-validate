/**
 * --------------------
 * Created by oliver.scharkowski on 19.12.23 - 14:12 😎
 * --------------------
 * Check out -> oscharko.de
 * --------------------
 * oscharko-library
 * --------------------
 */
export type TypeValidationRule = {
  name: string
  parameter?: {
    one?: number | string | string[]
    two?: number | string | string[]
  }
  message: {
    one: string
  }
}

export type TypeValidationRules = TypeValidationRule[]

export type TypeValidationRulesLib = {
  stringIsEmail: Function
  stringMinLength: Function
  stringMaxLength: Function
  stringIsTheSameAs: Function
  stringIsIBAN: Function
  stringDate: Function
}
