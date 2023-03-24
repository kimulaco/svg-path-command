import { parse } from './parser'

describe('parser', () => {
  test('M 100,100 m -50,-50', async () => {
    expect(parse('M100,100m-50,-50')).toEqual([
      {
        command: 'M',
        parameter: '100,100',
      },
      {
        command: 'm',
        parameter: '-50,-50',
      },
    ])
  })
})
