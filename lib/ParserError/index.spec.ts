import { ParserError, isParserError } from './'

describe('ParserError', () => {
  test('Create instance', async () => {
    const error = new ParserError('Invalid path command')

    expect(error.message).toBe('Invalid path command')
    expect(error.isParserError).toBeTruthy()
  })
})

describe('isParserError', () => {
  test('Vertify ParserError instance', async () => {
    const error = new ParserError('Invalid path command')

    expect(isParserError(error)).toBeTruthy()
  })

  test('Vertify Error instance', async () => {
    const error = new Error('Invalid path command')

    expect(isParserError(error)).toBeFalsy()
  })
})
