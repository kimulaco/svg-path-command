export class ParserError {
  isParserError = true
  message: string

  constructor(message: string) {
    if (!message) throw new Error('Required message')

    this.message = message
  }
}

export const isParserError = (error: unknown): error is ParserError => {
  return Boolean(
    typeof error === 'object' &&
      error !== null &&
      'isParserError' in error &&
      error.isParserError
  )
}
