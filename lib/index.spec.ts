import { parse } from './'
import { parsePathCommandList } from './parser'

describe('Importable modules', () => {
  test('parse', async () => {
    expect(parse).toBe(parsePathCommandList)
  })
})
