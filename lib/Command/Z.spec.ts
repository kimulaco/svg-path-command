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
})
