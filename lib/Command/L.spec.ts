import { AbsoluteLCommand, RelativeLCommand } from './L'

describe('AbsoluteLCommand', () => {
  let command: AbsoluteLCommand

  beforeAll(() => {
    command = new AbsoluteLCommand('L', [100, 200])
  })

  test('Create instance', async () => {
    expect(command.command).toBe('L')
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
      new AbsoluteLCommand('L', [100, 200, 300])
    }
    expect(createInvalidInstance).toThrow(
      'Command validate error: L, 100,200,300'
    )
  })
})

describe('RelativeLCommand', () => {
  let command: RelativeLCommand

  beforeAll(() => {
    command = new RelativeLCommand('l', [100, 200])
  })

  test('Create instance', async () => {
    expect(command.command).toBe('l')
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
      new RelativeLCommand('l', [100, 200, 300])
    }
    expect(createInvalidInstance).toThrow(
      'Command validate error: l, 100,200,300'
    )
  })
})
