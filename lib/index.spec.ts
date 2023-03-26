import { parse } from './'
import { parse as _parse } from './parser'

describe('Importable modules', () => {
  test('parse', async () => {
    expect(parse).toBe(_parse)
  })
})
