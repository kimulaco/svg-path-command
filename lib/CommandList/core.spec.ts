import {
  AbsoluteACommand,
  RelativeACommand,
  AbsoluteCCommand,
  RelativeCCommand,
  AbsoluteHCommand,
  RelativeHCommand,
  AbsoluteLCommand,
  RelativeLCommand,
  AbsoluteMCommand,
  RelativeMCommand,
  AbsoluteQCommand,
  RelativeQCommand,
  AbsoluteSCommand,
  RelativeSCommand,
  AbsoluteTCommand,
  RelativeTCommand,
  AbsoluteVCommand,
  RelativeVCommand,
  AbsoluteZCommand,
  RelativeZCommand,
} from '../Command'
import { splitCommand, parseCommand } from './core'
import { toEqualCommand } from './test/toEqualCommand'

describe('splitCommand', () => {
  test('M100,100', async () => {
    expect(splitCommand('M100,100')).toEqual({
      command: 'M',
      params: [100, 100],
    })
  })

  test('c20 0 15-80 40-80', async () => {
    expect(splitCommand('c20 0 15-80 40-80')).toEqual({
      command: 'c',
      params: [20, 0, 15, -80, 40, -80],
    })
  })

  test('c 20,0 15,-80 40,-80', async () => {
    expect(splitCommand('c 20,0 15,-80 40,-80')).toEqual({
      command: 'c',
      params: [20, 0, 15, -80, 40, -80],
    })
  })

  test('c -20 0 -15-80 40,-80', async () => {
    expect(splitCommand('c -20 0 -15-80 40,-80')).toEqual({
      command: 'c',
      params: [-20, 0, -15, -80, 40, -80],
    })
  })

  test('Error: Required command string', async () => {
    expect(() => splitCommand('')).toThrow('Required command string')
  })

  test('Error: Invalid command', async () => {
    expect(() => splitCommand('M top,left')).toThrow(
      'Invalid command: M top,left'
    )
  })
})

describe('parseCommand', () => {
  describe('AbsoluteACommand', () => {
    test('A100,200 0 1 300,400', async () => {
      const commands = parseCommand('A100,200 0 1 300,400')

      expect(commands.length).toBe(1)
      toEqualCommand(commands[0], {
        command: 'A',
        params: [100, 200, 0, 1, 300, 400],
        instanceClass: AbsoluteACommand,
      })
    })
  })

  describe('RelativeACommand', () => {
    test('a100,200 0 1 300,400', async () => {
      const commands = parseCommand('a100,200 0 1 300,400')

      expect(commands.length).toBe(1)
      toEqualCommand(commands[0], {
        command: 'a',
        params: [100, 200, 0, 1, 300, 400],
        instanceClass: RelativeACommand,
      })
    })
  })

  describe('AbsoluteCCommand', () => {
    test('Resolve: C100,200 300,400 500,600', async () => {
      const commands = parseCommand('C100,200 300,400 500,600')

      expect(commands.length).toBe(1)
      toEqualCommand(commands[0], {
        command: 'C',
        params: [100, 200, 300, 400, 500, 600],
        instanceClass: AbsoluteCCommand,
      })
    })

    test('Resolve: C100,200 300,400 500,600,700,800,900,1000,1100,1200', async () => {
      const commands = parseCommand(
        'C100,200 300,400 500,600,700,800,900,1000,1100,1200'
      )

      expect(commands.length).toBe(2)
      toEqualCommand(commands[0], {
        command: 'C',
        params: [100, 200, 300, 400, 500, 600],
        instanceClass: AbsoluteCCommand,
      })
      toEqualCommand(commands[1], {
        command: 'C',
        params: [700, 800, 900, 1000, 1100, 1200],
        instanceClass: AbsoluteCCommand,
      })
    })

    test('Reject: C100,200 300,400 500,600,700,800,900,1000', async () => {
      expect(() =>
        parseCommand('C100,200 300,400 500,600,700,800,900,1000')
      ).toThrow('Invalid command: C100,200 300,400 500,600,700,800,900,1000')
    })
  })

  describe('RelativeCCommand', () => {
    test('c100,200 300,400 500,600', async () => {
      const commands = parseCommand('c100,200 300,400 500,600')

      expect(commands.length).toBe(1)
      toEqualCommand(commands[0], {
        command: 'c',
        params: [100, 200, 300, 400, 500, 600],
        instanceClass: RelativeCCommand,
      })
    })
  })

  describe('AbsoluteHCommand', () => {
    test('H100', async () => {
      const commands = parseCommand('H100')

      expect(commands.length).toBe(1)
      toEqualCommand(commands[0], {
        command: 'H',
        params: [100],
        instanceClass: AbsoluteHCommand,
      })
    })
  })

  describe('RelativeHCommand', () => {
    test('h100', async () => {
      const commands = parseCommand('h100')

      expect(commands.length).toBe(1)
      toEqualCommand(commands[0], {
        command: 'h',
        params: [100],
        instanceClass: RelativeHCommand,
      })
    })

    test('h100,50,10', async () => {
      const commands = parseCommand('h100,50,10')

      expect(commands.length).toBe(3)
      toEqualCommand(commands[0], {
        command: 'h',
        params: [100],
        instanceClass: RelativeHCommand,
      })
      toEqualCommand(commands[1], {
        command: 'h',
        params: [50],
        instanceClass: RelativeHCommand,
      })
      toEqualCommand(commands[2], {
        command: 'h',
        params: [10],
        instanceClass: RelativeHCommand,
      })
    })
  })

  describe('AbsoluteLCommand', () => {
    test('L100,200', async () => {
      const commands = parseCommand('L100,200')

      expect(commands.length).toBe(1)
      toEqualCommand(commands[0], {
        command: 'L',
        params: [100, 200],
        instanceClass: AbsoluteLCommand,
      })
    })
  })

  describe('RelativeLCommand', () => {
    test('l100,200', async () => {
      const commands = parseCommand('l100,200')

      expect(commands.length).toBe(1)
      toEqualCommand(commands[0], {
        command: 'l',
        params: [100, 200],
        instanceClass: RelativeLCommand,
      })
    })
  })

  describe('AbsoluteMCommand', () => {
    test('M100,200', async () => {
      const commands = parseCommand('M100,200')

      expect(commands.length).toBe(1)
      toEqualCommand(commands[0], {
        command: 'M',
        params: [100, 200],
        instanceClass: AbsoluteMCommand,
      })
    })
  })

  describe('RelativeMCommand', () => {
    test('m100,200', async () => {
      const commands = parseCommand('m100,200')

      expect(commands.length).toBe(1)
      toEqualCommand(commands[0], {
        command: 'm',
        params: [100, 200],
        instanceClass: RelativeMCommand,
      })
    })
  })

  describe('AbsoluteQCommand', () => {
    test('Q100,200 300,400', async () => {
      const commands = parseCommand('Q100,200 300,400')

      expect(commands.length).toBe(1)
      toEqualCommand(commands[0], {
        command: 'Q',
        params: [100, 200, 300, 400],
        instanceClass: AbsoluteQCommand,
      })
    })
  })

  describe('RelativeQCommand', () => {
    test('q100,200 300,400', async () => {
      const commands = parseCommand('q100,200 300,400')

      expect(commands.length).toBe(1)
      toEqualCommand(commands[0], {
        command: 'q',
        params: [100, 200, 300, 400],
        instanceClass: RelativeQCommand,
      })
    })
  })

  describe('AbsoluteSCommand', () => {
    test('S100,200 300,400', async () => {
      const commands = parseCommand('S100,200 300,400')

      expect(commands.length).toBe(1)
      toEqualCommand(commands[0], {
        command: 'S',
        params: [100, 200, 300, 400],
        instanceClass: AbsoluteSCommand,
      })
    })
  })

  describe('RelativeSCommand', () => {
    test('s100,200 300,400', async () => {
      const commands = parseCommand('s100,200 300,400')

      expect(commands.length).toBe(1)
      toEqualCommand(commands[0], {
        command: 's',
        params: [100, 200, 300, 400],
        instanceClass: RelativeSCommand,
      })
    })
  })

  describe('AbsoluteTCommand', () => {
    test('T100,200', async () => {
      const commands = parseCommand('T100,200')

      expect(commands.length).toBe(1)
      toEqualCommand(commands[0], {
        command: 'T',
        params: [100, 200],
        instanceClass: AbsoluteTCommand,
      })
    })
  })

  describe('RelativeTCommand', () => {
    test('t100,200', async () => {
      const commands = parseCommand('t100,200')

      expect(commands.length).toBe(1)
      toEqualCommand(commands[0], {
        command: 't',
        params: [100, 200],
        instanceClass: RelativeTCommand,
      })
    })
  })

  describe('AbsoluteVCommand', () => {
    test('V100', async () => {
      const commands = parseCommand('V100')

      expect(commands.length).toBe(1)
      toEqualCommand(commands[0], {
        command: 'V',
        params: [100],
        instanceClass: AbsoluteVCommand,
      })
    })
  })

  describe('RelativeVCommand', () => {
    test('v100', async () => {
      const commands = parseCommand('v100')

      expect(commands.length).toBe(1)
      toEqualCommand(commands[0], {
        command: 'v',
        params: [100],
        instanceClass: RelativeVCommand,
      })
    })
  })

  describe('AbsoluteZCommand', () => {
    test('Z', async () => {
      const commands = parseCommand('Z')

      expect(commands.length).toBe(1)
      toEqualCommand(commands[0], {
        command: 'Z',
        params: [],
        instanceClass: AbsoluteZCommand,
      })
    })
  })

  describe('RelativeZCommand', () => {
    test('z', async () => {
      const commands = parseCommand('z')

      expect(commands.length).toBe(1)
      toEqualCommand(commands[0], {
        command: 'z',
        params: [],
        instanceClass: RelativeZCommand,
      })
    })
  })

  describe('Error', () => {
    test('Unknown command', async () => {
      expect(() => parseCommand('X100')).toThrow('Unknown command: X100')
    })
  })
})
