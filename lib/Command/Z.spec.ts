import { AbsoluteZCommand, RelativeZCommand } from './Z'

describe('AbsoluteZCommand', () => {
  let command: AbsoluteZCommand

  beforeAll(() => {
    command = new AbsoluteZCommand('Z', [])
  })

  test('Create instance', async () => {
    expect(command.command).toBe('Z')
    expect(command.params).toEqual([])
    expect(command.isRelative).toBe(false)
    expect(command.result).toEqual({})
  })

  test('marshall()', async () => {
    const result = command.marshall()
    expect(result).toEqual({})
    expect(command.result).toEqual({})
  })

  test('Validate error', async () => {
    const createInvalidInstance = () => {
      new AbsoluteZCommand('Z', [100, 200])
    }
    expect(createInvalidInstance).toThrow('Command validate error: Z, 100,200')
  })
})

describe('RelativeZCommand', () => {
  let command: RelativeZCommand

  beforeAll(() => {
    command = new RelativeZCommand('z', [])
  })

  test('Create instance', async () => {
    expect(command.command).toBe('z')
    expect(command.params).toEqual([])
    expect(command.isRelative).toBe(true)
    expect(command.result).toEqual({})
  })

  test('marshall()', async () => {
    const result = command.marshall()
    expect(result).toEqual({})
    expect(command.result).toEqual({})
  })

  test('Validate error', async () => {
    const createInvalidInstance = () => {
      new RelativeZCommand('z', [100, 200])
    }
    expect(createInvalidInstance).toThrow('Command validate error: z, 100,200')
  })
})
