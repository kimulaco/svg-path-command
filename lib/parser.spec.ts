import { parse } from './parser'
import { CommandList } from './CommandList'

describe('parse', () => {
  test('Create instance', async () => {
    const instance = parse('Z')
    expect(instance instanceof CommandList).toBeTruthy()
  })
})
