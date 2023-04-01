import { AbsoluteMCommand, RelativeMCommand } from './M'

describe('AbsoluteMCommand', () => {
  let command: AbsoluteMCommand

  beforeAll(() => {
    command = new AbsoluteMCommand('M', [100, 200])
  })

  test('Create instance', async () => {
    expect(command.command).toBe('M')
    expect(command.params).toEqual([100, 200])
    expect(command.isRelative).toBe(false)
    expect(command.result).toEqual({ x: 100, y: 200 })
  })

  test('marshall()', async () => {
    const result = command.marshall()
    expect(result).toEqual({ x: 100, y: 200 })
    expect(command.result).toEqual({ x: 100, y: 200 })
  })

  test('Validate error', async () => {
    const createInvalidInstance = () => {
      new AbsoluteMCommand('M', [100, 200, 300])
    }
    expect(createInvalidInstance).toThrow(
      'Command validate error: M, 100,200,300'
    )
  })
})

describe('RelativeMCommand', () => {
  let command: RelativeMCommand

  beforeAll(() => {
    command = new RelativeMCommand('m', [100, 200])
  })

  test('Create instance', async () => {
    expect(command.command).toBe('m')
    expect(command.params).toEqual([100, 200])
    expect(command.isRelative).toBe(true)
    expect(command.result).toEqual({ dx: 100, dy: 200 })
  })

  test('marshall()', async () => {
    const result = command.marshall()
    expect(result).toEqual({ dx: 100, dy: 200 })
    expect(command.result).toEqual({ dx: 100, dy: 200 })
  })

  test('Validate error', async () => {
    const createInvalidInstance = () => {
      new RelativeMCommand('m', [100, 200, 300])
    }
    expect(createInvalidInstance).toThrow(
      'Command validate error: m, 100,200,300'
    )
  })
})
