import { parse } from './parser'

describe('parser', () => {
  test('MoveTo path command', async () => {
    expect(parse('M100,100m-100,-100')).toEqual([
      {
        command: 'M',
        parameter: '100,100',
      },
      {
        command: 'm',
        parameter: '-100,-100',
      },
    ])
  })

  test('LineTo path command', async () => {
    expect(parse('L100,100l-100,-100H100h-100V100v-100')).toEqual([
      {
        command: 'L',
        parameter: '100,100',
      },
      {
        command: 'l',
        parameter: '-100,-100',
      },
      {
        command: 'H',
        parameter: '100',
      },
      {
        command: 'h',
        parameter: '-100',
      },
      {
        command: 'V',
        parameter: '100',
      },
      {
        command: 'v',
        parameter: '-100',
      },
    ])
  })
})
