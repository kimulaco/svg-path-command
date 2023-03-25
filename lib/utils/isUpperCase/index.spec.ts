import { isUpperCase } from './'

describe('isUpperCase', () => {
  test('is upper case', async () => {
    expect(isUpperCase('M')).toBeTruthy()
  })

  test('is not upper case', async () => {
    expect(isUpperCase('m')).toBeFalsy()
  })
})
