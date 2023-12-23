import isString from "./isString.ts";

/**
 * --------------------
 * Created by oliver.scharkowski on 21.12.23 - 20:39 😎
 * --------------------
 * Check out -> oscharko.de
 * --------------------
 * oscharko-library
 * --------------------
 */
type TypeCountryCode =
  | 'AD'
  | 'AE'
  | 'AL'
  | 'AT'
  | 'AZ'
  | 'BA'
  | 'BE'
  | 'BG'
  | 'BH'
  | 'BR'
  | 'BY'
  | 'CH'
  | 'CR'
  | 'CY'
  | 'CZ'
  | 'DE'
  | 'DK'
  | 'DO'
  | 'EE'
  | 'EG'
  | 'ES'
  | 'FI'
  | 'FO'
  | 'FR'
  | 'GB'
  | 'GE'
  | 'GI'
  | 'GL'
  | 'GR'
  | 'GT'
  | 'HR'
  | 'HU'
  | 'IE'
  | 'IL'
  | 'IQ'
  | 'IR'
  | 'IS'
  | 'IT'
  | 'JO'
  | 'KW'
  | 'KZ'
  | 'LB'
  | 'LC'
  | 'LI'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'MC'
  | 'MD'
  | 'ME'
  | 'MK'
  | 'MR'
  | 'MT'
  | 'MU'
  | 'MZ'
  | 'NL'
  | 'NO'
  | 'PK'
  | 'PL'
  | 'PS'
  | 'PT'
  | 'QA'
  | 'RO'
  | 'RS'
  | 'SA'
  | 'SC'
  | 'SE'
  | 'SI'
  | 'SK'
  | 'SM'
  | 'SV'
  | 'TL'
  | 'TN'
  | 'TR'
  | 'UA'
  | 'VA'
  | 'VG'
  | 'XK'

type TypeIbanRegexThroughCountryCode = {
  AD: RegExp
  AE: RegExp
  AL: RegExp
  AT: RegExp
  AZ: RegExp
  BA: RegExp
  BE: RegExp
  BG: RegExp
  BH: RegExp
  BR: RegExp
  BY: RegExp
  CH: RegExp
  CR: RegExp
  CY: RegExp
  CZ: RegExp
  DE: RegExp
  DK: RegExp
  DO: RegExp
  EE: RegExp
  EG: RegExp
  ES: RegExp
  FI: RegExp
  FO: RegExp
  FR: RegExp
  GB: RegExp
  GE: RegExp
  GI: RegExp
  GL: RegExp
  GR: RegExp
  GT: RegExp
  HR: RegExp
  HU: RegExp
  IE: RegExp
  IL: RegExp
  IQ: RegExp
  IR: RegExp
  IS: RegExp
  IT: RegExp
  JO: RegExp
  KW: RegExp
  KZ: RegExp
  LB: RegExp
  LC: RegExp
  LI: RegExp
  LT: RegExp
  LU: RegExp
  LV: RegExp
  MA: RegExp
  MC: RegExp
  MD: RegExp
  ME: RegExp
  MK: RegExp
  MR: RegExp
  MT: RegExp
  MU: RegExp
  MZ: RegExp
  NL: RegExp
  NO: RegExp
  PK: RegExp
  PL: RegExp
  PS: RegExp
  PT: RegExp
  QA: RegExp
  RO: RegExp
  RS: RegExp
  SA: RegExp
  SC: RegExp
  SE: RegExp
  SI: RegExp
  SK: RegExp
  SM: RegExp
  SV: RegExp
  TL: RegExp
  TN: RegExp
  TR: RegExp
  UA: RegExp
  VA: RegExp
  VG: RegExp
  XK: RegExp
}

const ibanRegexThroughCountryCode: TypeIbanRegexThroughCountryCode = {
  AD: /^(AD[0-9]{2})\d{8}[A-Z0-9]{12}$/,
  AE: /^(AE[0-9]{2})\d{3}\d{16}$/,
  AL: /^(AL[0-9]{2})\d{8}[A-Z0-9]{16}$/,
  AT: /^(AT[0-9]{2})\d{16}$/,
  AZ: /^(AZ[0-9]{2})[A-Z0-9]{4}\d{20}$/,
  BA: /^(BA[0-9]{2})\d{16}$/,
  BE: /^(BE[0-9]{2})\d{12}$/,
  BG: /^(BG[0-9]{2})[A-Z]{4}\d{6}[A-Z0-9]{8}$/,
  BH: /^(BH[0-9]{2})[A-Z]{4}[A-Z0-9]{14}$/,
  BR: /^(BR[0-9]{2})\d{23}[A-Z]{1}[A-Z0-9]{1}$/,
  BY: /^(BY[0-9]{2})[A-Z0-9]{4}\d{20}$/,
  CH: /^(CH[0-9]{2})\d{5}[A-Z0-9]{12}$/,
  CR: /^(CR[0-9]{2})\d{18}$/,
  CY: /^(CY[0-9]{2})\d{8}[A-Z0-9]{16}$/,
  CZ: /^(CZ[0-9]{2})\d{20}$/,
  DE: /^(DE[0-9]{2})\d{18}$/,
  DK: /^(DK[0-9]{2})\d{14}$/,
  DO: /^(DO[0-9]{2})[A-Z]{4}\d{20}$/,
  EE: /^(EE[0-9]{2})\d{16}$/,
  EG: /^(EG[0-9]{2})\d{25}$/,
  ES: /^(ES[0-9]{2})\d{20}$/,
  FI: /^(FI[0-9]{2})\d{14}$/,
  FO: /^(FO[0-9]{2})\d{14}$/,
  FR: /^(FR[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
  GB: /^(GB[0-9]{2})[A-Z]{4}\d{14}$/,
  GE: /^(GE[0-9]{2})[A-Z0-9]{2}\d{16}$/,
  GI: /^(GI[0-9]{2})[A-Z]{4}[A-Z0-9]{15}$/,
  GL: /^(GL[0-9]{2})\d{14}$/,
  GR: /^(GR[0-9]{2})\d{7}[A-Z0-9]{16}$/,
  GT: /^(GT[0-9]{2})[A-Z0-9]{4}[A-Z0-9]{20}$/,
  HR: /^(HR[0-9]{2})\d{17}$/,
  HU: /^(HU[0-9]{2})\d{24}$/,
  IE: /^(IE[0-9]{2})[A-Z0-9]{4}\d{14}$/,
  IL: /^(IL[0-9]{2})\d{19}$/,
  IQ: /^(IQ[0-9]{2})[A-Z]{4}\d{15}$/,
  IR: /^(IR[0-9]{2})0\d{2}0\d{18}$/,
  IS: /^(IS[0-9]{2})\d{22}$/,
  IT: /^(IT[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
  JO: /^(JO[0-9]{2})[A-Z]{4}\d{22}$/,
  KW: /^(KW[0-9]{2})[A-Z]{4}[A-Z0-9]{22}$/,
  KZ: /^(KZ[0-9]{2})\d{3}[A-Z0-9]{13}$/,
  LB: /^(LB[0-9]{2})\d{4}[A-Z0-9]{20}$/,
  LC: /^(LC[0-9]{2})[A-Z]{4}[A-Z0-9]{24}$/,
  LI: /^(LI[0-9]{2})\d{5}[A-Z0-9]{12}$/,
  LT: /^(LT[0-9]{2})\d{16}$/,
  LU: /^(LU[0-9]{2})\d{3}[A-Z0-9]{13}$/,
  LV: /^(LV[0-9]{2})[A-Z]{4}[A-Z0-9]{13}$/,
  MA: /^(MA[0-9]{26})$/,
  MC: /^(MC[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
  MD: /^(MD[0-9]{2})[A-Z0-9]{20}$/,
  ME: /^(ME[0-9]{2})\d{18}$/,
  MK: /^(MK[0-9]{2})\d{3}[A-Z0-9]{10}\d{2}$/,
  MR: /^(MR[0-9]{2})\d{23}$/,
  MT: /^(MT[0-9]{2})[A-Z]{4}\d{5}[A-Z0-9]{18}$/,
  MU: /^(MU[0-9]{2})[A-Z]{4}\d{19}[A-Z]{3}$/,
  MZ: /^(MZ[0-9]{2})\d{21}$/,
  NL: /^(NL[0-9]{2})[A-Z]{4}\d{10}$/,
  NO: /^(NO[0-9]{2})\d{11}$/,
  PK: /^(PK[0-9]{2})[A-Z0-9]{4}\d{16}$/,
  PL: /^(PL[0-9]{2})\d{24}$/,
  PS: /^(PS[0-9]{2})[A-Z0-9]{4}\d{21}$/,
  PT: /^(PT[0-9]{2})\d{21}$/,
  QA: /^(QA[0-9]{2})[A-Z]{4}[A-Z0-9]{21}$/,
  RO: /^(RO[0-9]{2})[A-Z]{4}[A-Z0-9]{16}$/,
  RS: /^(RS[0-9]{2})\d{18}$/,
  SA: /^(SA[0-9]{2})\d{2}[A-Z0-9]{18}$/,
  SC: /^(SC[0-9]{2})[A-Z]{4}\d{20}[A-Z]{3}$/,
  SE: /^(SE[0-9]{2})\d{20}$/,
  SI: /^(SI[0-9]{2})\d{15}$/,
  SK: /^(SK[0-9]{2})\d{20}$/,
  SM: /^(SM[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
  SV: /^(SV[0-9]{2})[A-Z0-9]{4}\d{20}$/,
  TL: /^(TL[0-9]{2})\d{19}$/,
  TN: /^(TN[0-9]{2})\d{20}$/,
  TR: /^(TR[0-9]{2})\d{5}[A-Z0-9]{17}$/,
  UA: /^(UA[0-9]{2})\d{6}[A-Z0-9]{19}$/,
  VA: /^(VA[0-9]{2})\d{18}$/,
  VG: /^(VG[0-9]{2})[A-Z0-9]{4}\d{16}$/,
  XK: /^(XK[0-9]{2})\d{16}$/,
}

const hasOnlyValidCountryCodes = (countryCodeArray: TypeCountryCode[]) => {
  const countryCodeArrayFilteredWithObjectIbanCode = countryCodeArray.filter(
    (countryCode: any) => !(countryCode in ibanRegexThroughCountryCode)
  )
  return countryCodeArrayFilteredWithObjectIbanCode.length <= 0
}

const hasValidIbanFormat = (
  str: string,
  options: { whitelist: TypeCountryCode[]; blacklist: TypeCountryCode[] }
) => {
  // Strip white spaces and hyphens
  const strippedStr: string = str.replace(/[\s\-]+/gi, '').toUpperCase()
  const isoCountryCode: string = strippedStr.slice(0, 2).toUpperCase()

  const isoCountryCodeInIbanRegexCodeObject =
    isoCountryCode in ibanRegexThroughCountryCode

  if (options.whitelist) {
    if (!hasOnlyValidCountryCodes(options.whitelist)) {
      return false
    }
    // @ts-ignore
    const isoCountryCodeInWhiteList = options.whitelist.includes(
      <TypeCountryCode>isoCountryCode
    )

    if (!isoCountryCodeInWhiteList) {
      return false
    }
  }

  if (options.blacklist) {
    // @ts-ignore
    const isoCountryCodeInBlackList = options.blacklist.includes(
      <TypeCountryCode>isoCountryCode
    )

    if (isoCountryCodeInBlackList) {
      return false
    }
  }

  return (
    isoCountryCodeInIbanRegexCodeObject &&
    ibanRegexThroughCountryCode[<TypeCountryCode>isoCountryCode].test(strippedStr)
  )
}

const hasValidIbanChecksum = (value: string) => {
  const countryCode = value.slice(0, 2).split('')
  for (let x = 0; x < countryCode.length; x += 1) {
    countryCode[x] = String(countryCode[x].charCodeAt(0) - 55)
  }
  const countryCharCode = countryCode.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  )
  const strippedStr: string = value.replace(/[^A-Z0-9]+/gi, '').toUpperCase()
  const rearranged: string = strippedStr.slice(4) + strippedStr.slice(0, 4)

  const alphaCapsReplacedWithDigits: string = rearranged.replace(
    value.slice(0, 2),
    countryCharCode
  )

  const remainder = Number(
    alphaCapsReplacedWithDigits.match(/\d{1,7}/g)?.reduce(
      // @ts-ignore
      (acc, value) => Number(acc + value) % 97,
      ''
    )
  )

  return remainder === 1
}

export default (
  value: string,
  rule: {
    name: string
    parameter?: {
      one?: TypeCountryCode[]
      two?: TypeCountryCode[]
    }
    message: {
      one: string
    }
  }
) => {
  isString(value)
  const options = {
    whitelist: rule.parameter?.one ? rule.parameter?.one : [],
    blacklist: rule.parameter?.two ? rule.parameter?.two : [],
  }
  const message = rule.message.one
  if (hasValidIbanFormat(value, options) && hasValidIbanChecksum(value)) {
    return true
  } else {
    return message
  }
}
