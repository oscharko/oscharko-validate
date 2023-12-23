/**
 * --------------------
 * Created by oliver.scharkowski on 23.12.23 - 13:32 😎
 * --------------------
 * Check out -> oscharko.de
 * --------------------
 * oscharko-library
 * --------------------
 */
export default (
  dateValue: string,
  responseType: string | boolean = 'string',
  dateFormat: string | null = null
) => {
  if (dateValue.trim() === '') {
    return
  }

  const responses:
    | ['Invalid Format', 'Invalid Date', 'Valid Date']
    | [false, false, true] = responseSetter(responseType)

  return dateValidator(dateValue, responses, dateFormat)
}

const responseSetter = (
  responseType: string | boolean
): ['Invalid Format', 'Invalid Date', 'Valid Date'] | [false, false, true] => {
  switch (responseType) {
    case 'string':
      return ['Invalid Format', 'Invalid Date', 'Valid Date']
    case 'boolean':
      return [false, false, true]

    default:
      return ['Invalid Format', 'Invalid Date', 'Valid Date']
  }
}

const daysInMonth = (year: number, month: number) => {
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  return month === 2 && year % 4 === 0 ? 29 : days[month - 1]
}

const getAllIndexes = (arr: string[], val: string) => {
  const indexes = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) indexes.push(i)
  }

  return indexes
}

const isLeapYear = (year: number) => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) && year >= 1753
}

const dateValidator = (
  dateValue: string,
  responses: ['Invalid Format', 'Invalid Date', 'Valid Date'] | [false, false, true],
  dateFormat: string | null
) => {
  if (dateValue) {
    if (!dateFormat) {
      dateFormat = dateValue.includes('.') ? 'mm.dd.yyyy' : 'mm/dd/yyyy'
    }
    // @ts-ignore: Object is possibly 'null'.
    const dateSeparator = /[^dmy]/i.exec(dateFormat)[0] // Extract the separator character

    if (!dateValue.includes(dateSeparator)) {
      return responses[0]
    }

    if (dateFormat.length > 10 || dateFormat.length < 6) return responses[0]

    const formatSplit = dateValue.includes('.')
      ? dateFormat.split('.')
      : dateFormat.split('/')
    const wrongFormat = formatSplit
      .map((formatPart) => /([dmy])\1/i.test(formatPart))
      .filter((rightFormat) => !rightFormat)

    if (wrongFormat.length > 0) return responses[0]

    const formatRegex = new RegExp(
      `(\\d{${formatSplit[0].length}})(${dateSeparator})(\\d{${formatSplit[1].length}})(${dateSeparator})(\\d{${formatSplit[2].length}})`
    )
    type TypePosition = Number[]
    const dayPosition: TypePosition = getAllIndexes(
      formatSplit,
      formatSplit.filter((formatPart) => /d/i.test(formatPart))[0]
    )
    const monthPosition: TypePosition = getAllIndexes(
      formatSplit,
      formatSplit.filter((formatPart) => /m/i.test(formatPart))[0]
    )
    const yearPosition: TypePosition = getAllIndexes(
      formatSplit,
      formatSplit.filter((formatPart) => /y/i.test(formatPart))[0]
    )

    if (
      dayPosition.length !== 1 ||
      monthPosition.length !== 1 ||
      yearPosition.length !== 1
    ) {
      return responses[0]
    }

    if (formatRegex.test(dateValue)) {
      const dateSplit = dateValue.split(dateSeparator)
      const day = Number(dateSplit[dayPosition[0] as keyof []])
      const month = Number(dateSplit[monthPosition[0] as keyof []])
      const year = Number(dateSplit[yearPosition[0] as keyof []])

      // Check for invalid dates
      if (
        month <= 0 ||
        month > 12 ||
        day <= 0 ||
        day > daysInMonth(year, month) ||
        year < 1753 ||
        (month === 2 && day === 29 && !isLeapYear(year))
      ) {
        return responses[1]
      }
    } else {
      return responses[0]
    }
  }
  return responses[2]
}
