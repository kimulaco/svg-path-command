import { parse } from './parser'

describe('parse', () => {
  describe('Move to path command', () => {
    test('Move to absolute coordinate', async () => {
      expect(parse('M100,100')).toEqual([
        {
          command: 'M',
          param: '100,100',
        },
      ])
    })

    test('Move to relative coordinate', async () => {
      expect(parse('m100,100')).toEqual([
        {
          command: 'm',
          param: '100,100',
        },
      ])
    })
  })

  describe('Line to path command', () => {
    test('Draw a line to absolute coordinate', async () => {
      expect(parse('L100,100')).toEqual([
        {
          command: 'L',
          param: '100,100',
        },
      ])
    })

    test('Draw a line to relative coordinate', async () => {
      expect(parse('l100,100')).toEqual([
        {
          command: 'l',
          param: '100,100',
        },
      ])
    })

    test('Draw a horizontal line to absolute coordinate', async () => {
      expect(parse('H100,100')).toEqual([
        {
          command: 'H',
          param: '100,100',
        },
      ])
    })

    test('Draw horizontal line to relative coordinate', async () => {
      expect(parse('h100,100')).toEqual([
        {
          command: 'h',
          param: '100,100',
        },
      ])
    })

    test('Draw a vertical line to absolute coordinate', async () => {
      expect(parse('V100,100')).toEqual([
        {
          command: 'V',
          param: '100,100',
        },
      ])
    })

    test('Draw a vertical line to relative coordinate', async () => {
      expect(parse('v100,100')).toEqual([
        {
          command: 'v',
          param: '100,100',
        },
      ])
    })
  })

  describe('Cubic bezier curve command', () => {
    test('Draw a cubic bezier curve by absolute coordinate', async () => {
      expect(parse('C30,90 25,10 50,10')).toEqual([
        {
          command: 'C',
          param: '30,90 25,10 50,10',
        },
      ])
    })

    test('Draw a cubic bezier curve by relative coordinate', async () => {
      expect(parse('c30,90 25,10 50,10')).toEqual([
        {
          command: 'c',
          param: '30,90 25,10 50,10',
        },
      ])
    })

    test('Draw a smooth cubic bezier curve by absolute coordinate', async () => {
      expect(parse('S70,90 90,90')).toEqual([
        {
          command: 'S',
          param: '70,90 90,90',
        },
      ])
    })

    test('Draw a smooth cubic bezier curve by relative coordinate', async () => {
      expect(parse('s70,90 90,90')).toEqual([
        {
          command: 's',
          param: '70,90 90,90',
        },
      ])
    })
  })

  describe('Close path command', () => {
    test('Close path', async () => {
      expect(parse('L100,100Zl-100,-100z')).toEqual([
        {
          command: 'L',
          param: '100,100',
        },
        {
          command: 'Z',
          param: '',
        },
        {
          command: 'l',
          param: '-100,-100',
        },
        {
          command: 'z',
          param: '',
        },
      ])
    })
  })
})
