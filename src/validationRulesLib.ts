import {TypeValidationRulesLib} from "./types/types";
import stringIsEmail from "./rules/stringIsEmail.ts";
import stringMinLength from "./rules/stringMinLength.ts";
import stringMaxLength from "./rules/stringMaxLength.ts";
import stringIsTheSameAs from "./rules/stringIsTheSameAs.ts";
import stringIsIBAN from "./rules/stringIsIBAN.ts";
import stringDate from "./rules/stringDate.ts";

/**
 * Validation Rules Library.
 *
 * @type {Object} TypeValidationRulesLib
 * @property {Function} stringMinLength - Function to validate a string with minimum length.
 * @property {Function} stringMaxLength - Function to validate a string with maximum length.
 */
export const validationRulesLib: TypeValidationRulesLib = {
  stringIsEmail: stringIsEmail,
  stringMinLength: stringMinLength,
  stringMaxLength: stringMaxLength,
  stringIsTheSameAs: stringIsTheSameAs,
  stringIsIBAN: stringIsIBAN,
  stringDate: stringDate,
}
