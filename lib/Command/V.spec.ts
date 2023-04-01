import { AbsoluteVCommand, RelativeVCommand } from './V'

describe('AbsoluteVCommand', () => {
  let command: AbsoluteVCommand

  beforeAll(() => {
    command = new AbsoluteVCommand('V', [100])
  })

  test('Create instance', async () => {
    expect(command.command).toBe('V')
    expect(command.params).toEqual([100])
    expect(command.isRelative).toBe(false)
    expect(command.result).toEqual({ y: 100 })
  })

  test('marshall()', async () => {
    const result = command.marshall()
    expect(result).toEqual({ y: 100 })
    expect(command.result).toEqual({ y: 100 })
  })

  test('Validate error', async () => {
    const createInvalidInstance = () => {
      new AbsoluteVCommand('V', [100, 200])
    }
    expect(createInvalidInstance).toThrow('Command validate error: V, 100,200')
  })
})

describe('RelativeVCommand', () => {
  let command: RelativeVCommand

  beforeAll(() => {
    command = new RelativeVCommand('v', [100])
  })

  test('Create instance', async () => {
    expect(command.command).toBe('v')
    expect(command.params).toEqual([100])
    expect(command.isRelative).toBe(true)
    expect(command.result).toEqual({ dy: 100 })
  })

  test('marshall()', async () => {
    const result = command.marshall()
    expect(result).toEqual({ dy: 100 })
    expect(command.result).toEqual({ dy: 100 })
  })

  test('Validate error', async () => {
    const createInvalidInstance = () => {
      new RelativeVCommand('v', [100, 200])
    }
    expect(createInvalidInstance).toThrow('Command validate error: v, 100,200')
  })
})
