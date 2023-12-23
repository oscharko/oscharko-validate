import validateDate from "../utils/validateDate.ts";


/**
 * --------------------
 * Created by oliver.scharkowski on 23.12.23 - 13:08 😎
 * --------------------
 * Check out -> oscharko.de
 * --------------------
 * oscharko-library
 * --------------------
 */
type TypeValidationRuleStringDate = {
  name: string
  parameter: {
    dateFormat: string
  }
  message: {
    invalidFormat: string
    invalidDate: string
  }
}

export default (value: string, rule: TypeValidationRuleStringDate): string | boolean => {
  if (validateDate(value, 'string', rule.parameter.dateFormat) === 'Valid Date') {
    return true
  } else if (
    validateDate(value, 'string', rule.parameter.dateFormat) === 'Invalid Date'
  ) {
    return rule.message.invalidDate
  }
  return rule.message.invalidFormat
}
