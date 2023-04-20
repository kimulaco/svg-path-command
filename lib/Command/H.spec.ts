import { AbsoluteHCommand, RelativeHCommand } from './H'

describe('AbsoluteHCommand', () => {
  let command: AbsoluteHCommand

  beforeAll(() => {
    command = new AbsoluteHCommand('H', [100])
  })

  test('Create instance', async () => {
    expect(command.command).toBe('H')
    expect(command.params).toEqual([100])
    expect(command.isRelative).toBe(false)
    expect(command.result).toEqual({ x: 100 })
  })

  test('marshall()', async () => {
    const result = command.marshall()
    expect(result).toEqual({ x: 100 })
    expect(command.result).toEqual({ x: 100 })
  })

  test('unmarshall()', async () => {
    const result = command.marshall()

    expect(result).toEqual({ x: 100 })

    command.updateResult({ x: 200 })

    expect(command.params).toEqual([200])
    expect(command.result).toEqual({ x: 200 })

    expect(() => {
      command.updateResult(undefined)
    }).toThrow('Invalid result object')
  })

  test('Validate error', async () => {
    expect(() => {
      new AbsoluteHCommand('H', [100, 200])
    }).toThrow('Command validate error: H, 100,200')
  })
})

describe('RelativeHCommand', () => {
  let command: RelativeHCommand

  beforeAll(() => {
    command = new RelativeHCommand('h', [100])
  })

  test('Create instance', async () => {
    expect(command.command).toBe('h')
    expect(command.params).toEqual([100])
    expect(command.isRelative).toBe(true)
    expect(command.result).toEqual({ dx: 100 })
  })

  test('marshall()', async () => {
    const result = command.marshall()
    expect(result).toEqual({ dx: 100 })
    expect(command.result).toEqual({ dx: 100 })
  })

  test('unmarshall()', async () => {
    const result = command.marshall()

    expect(result).toEqual({ dx: 100 })

    command.updateResult({ dx: 200 })

    expect(command.params).toEqual([200])
    expect(command.result).toEqual({ dx: 200 })

    expect(() => {
      command.updateResult(undefined)
    }).toThrow('Invalid result object')
  })

  test('Validate error', async () => {
    const createInvalidInstance = () => {
      new RelativeHCommand('h', [100, 200])
    }
    expect(createInvalidInstance).toThrow('Command validate error: h, 100,200')
  })
})
