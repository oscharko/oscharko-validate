import {useInternDto} from "../stores/internDto.ts";

/**
 * --------------------
 * Created by oliver.scharkowski on 21.12.23 - 12:25 😎
 * --------------------
 * Check out -> oscharko.de
 * --------------------
 * oscharko-library
 * --------------------
 */

type TypeValidationRuleStringIsTheSameAs = {
  name: string
  parameter: {
    dataBindingFromComparer: string
    internDto: Function
  },
  message: {
    one: string
  },
}
export default (value: string, rule: TypeValidationRuleStringIsTheSameAs) => {
  const internDto = rule.parameter.internDto
  const dataBinding =
    rule.parameter.dataBindingFromComparer && typeof rule.parameter.dataBindingFromComparer === 'string'
      ? rule.parameter.dataBindingFromComparer
      : ''
  const message = rule.message.one
  if (value === internDto.getValueFromInternDto(dataBinding).value) {
    return true
  } else {
    return message
  }
}
