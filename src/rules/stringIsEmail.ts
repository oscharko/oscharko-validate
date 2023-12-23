import {TypeValidationRule} from "../types/types";
import {emailRegex} from "../constants/regex.ts";

/**
 * Validates a value against a given validation rule.
 *
 * @param {string} value - The value to be validated.
 * @param {TypeValidationRule} rule - The validation rule to be applied.
 * @returns {string | boolean} - Returns either true if the value is valid or a string error message if the value is invalid.
 */
export default (value: string, rule: TypeValidationRule): string | boolean => {
  const message = rule.message.one
  if (emailRegex.test(value)) {
    return true
  }
  return message
}
