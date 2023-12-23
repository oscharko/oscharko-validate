import {TypeValidationRule} from "../types/types";

/**
 * Validates a string value based on a given validation rule.
 *
 * @param {string} value - The string value to be validated.
 * @param {TypeValidationRule} rule - The validation rule to be applied.
 * @returns {string | boolean} - Returns either true if the value is valid or a string message if the value is invalid.
 */
export default (value: string, rule: TypeValidationRule): string | boolean => {
  const min =
    rule.parameter?.one && typeof rule.parameter?.one === 'number'
      ? rule.parameter?.one
      : 0
  const message = rule.message.one
  if (value.length >= min) {
    return true
  }
  return message
}
