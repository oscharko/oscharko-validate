import {TypeValidationRule} from "../types/types";

/**
 * Validates a given value against a set of validation rules.
 *
 * @param {string} value - The value to be validated.
 * @param {TypeValidationRule} rule - The validation rules to be applied.
 * @returns {string | boolean} - Returns `true` if the value is valid, otherwise returns the validation error message.
 */
export default (value: string, rule: TypeValidationRule): string | boolean => {
  const max =
    rule.parameter?.one && typeof rule.parameter?.one === 'number'
      ? rule.parameter?.one
      : 0
  const message = rule.message.one
  if (value.length <= max) {
    return true
  }
  return message
}
