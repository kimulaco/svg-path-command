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
import { splitCommand, parseCommand } from './common'

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
      expect(commands[0] instanceof AbsoluteACommand).toBeTruthy()
    })
  })

  describe('RelativeACommand', () => {
    test('a100,200 0 1 300,400', async () => {
      const commands = parseCommand('a100,200 0 1 300,400')
      expect(commands[0] instanceof RelativeACommand).toBeTruthy()
    })
  })

  describe('AbsoluteCCommand', () => {
    test('C100,200 300,400 500,600', async () => {
      const commands = parseCommand('C100,200 300,400 500,600')
      expect(commands[0] instanceof AbsoluteCCommand).toBeTruthy()
    })
  })

  describe('RelativeCCommand', () => {
    test('c100,200 300,400 500,600', async () => {
      const commands = parseCommand('c100,200 300,400 500,600')
      expect(commands[0] instanceof RelativeCCommand).toBeTruthy()
    })
  })

  describe('AbsoluteHCommand', () => {
    test('H100', async () => {
      const commands = parseCommand('H100')
      expect(commands[0] instanceof AbsoluteHCommand).toBeTruthy()
    })
  })

  describe('RelativeHCommand', () => {
    test('h100', async () => {
      const commands = parseCommand('h100')
      expect(commands[0] instanceof RelativeHCommand).toBeTruthy()
    })
  })

  describe('AbsoluteLCommand', () => {
    test('L100,100', async () => {
      const commands = parseCommand('L100,100')
      expect(commands[0] instanceof AbsoluteLCommand).toBeTruthy()
    })
  })

  describe('RelativeLCommand', () => {
    test('l100,100', async () => {
      const commands = parseCommand('l100,100')
      expect(commands[0] instanceof RelativeLCommand).toBeTruthy()
    })
  })

  describe('AbsoluteMCommand', () => {
    test('M100,100', async () => {
      const commands = parseCommand('M100,100')
      expect(commands[0] instanceof AbsoluteMCommand).toBeTruthy()
    })
  })

  describe('RelativeMCommand', () => {
    test('m100,100', async () => {
      const commands = parseCommand('m100,100')
      expect(commands[0] instanceof RelativeMCommand).toBeTruthy()
    })
  })

  describe('AbsoluteQCommand', () => {
    test('Q100,200 300,400', async () => {
      const commands = parseCommand('Q100,200 300,400')
      expect(commands[0] instanceof AbsoluteQCommand).toBeTruthy()
    })
  })

  describe('RelativeQCommand', () => {
    test('q100,200 300,400', async () => {
      const commands = parseCommand('q100,200 300,400')
      expect(commands[0] instanceof RelativeQCommand).toBeTruthy()
    })
  })

  describe('AbsoluteSCommand', () => {
    test('S100,200 300,400', async () => {
      const commands = parseCommand('S100,200 300,400')
      expect(commands[0] instanceof AbsoluteSCommand).toBeTruthy()
    })
  })

  describe('RelativeSCommand', () => {
    test('s100,200 300,400', async () => {
      const commands = parseCommand('s100,200 300,400')
      expect(commands[0] instanceof RelativeSCommand).toBeTruthy()
    })
  })

  describe('AbsoluteTCommand', () => {
    test('T100,100', async () => {
      const commands = parseCommand('T100,100')
      expect(commands[0] instanceof AbsoluteTCommand).toBeTruthy()
    })
  })

  describe('RelativeTCommand', () => {
    test('t100,100', async () => {
      const commands = parseCommand('t100,100')
      expect(commands[0] instanceof RelativeTCommand).toBeTruthy()
    })
  })

  describe('AbsoluteVCommand', () => {
    test('V100', async () => {
      const commands = parseCommand('V100')
      expect(commands[0] instanceof AbsoluteVCommand).toBeTruthy()
    })
  })

  describe('RelativeVCommand', () => {
    test('v100', async () => {
      const commands = parseCommand('v100')
      expect(commands[0] instanceof RelativeVCommand).toBeTruthy()
    })
  })

  describe('AbsoluteZCommand', () => {
    test('Z', async () => {
      const commands = parseCommand('Z')
      expect(commands[0] instanceof AbsoluteZCommand).toBeTruthy()
    })
  })

  describe('RelativeZCommand', () => {
    test('z', async () => {
      const commands = parseCommand('z')
      expect(commands[0] instanceof RelativeZCommand).toBeTruthy()
    })
  })

  describe('Error', () => {
    test('Unknown command', async () => {
      expect(() => parseCommand('X100')).toThrow('Unknown command: X100')
    })
  })
})
