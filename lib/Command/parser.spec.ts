import { parseCommand } from './parser'

describe('parseCommand', () => {
  test('parseCommand', async () => {
    expect(parseCommand('M100,100')).toEqual({
      command: 'M',
      params: [100, 100],
    })
  })
})
