import { Command } from './Command'
import type { CommandParseResult } from './Command'

describe('Command', () => {
  let command: Command<'Z', CommandParseResult<string>>

  beforeAll(() => {
    command = new Command('Z', [])
  })

  test('Create instance', async () => {
    expect(command.command).toBe('Z')
    expect(command.params).toEqual([])
    expect(command.isRelative).toBe(false)
    expect(command.result).toEqual(undefined)
  })

  test('marshall()', async () => {
    const result = command.marshall()
    expect(result).toBe(undefined)
    expect(command.result).toBe(undefined)
  })

  test('unmarshall()', async () => {
    const params = command.unmarshall()
    expect(params).toEqual([])
    expect(command.params).toEqual([])
  })

  test('validateParams()', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(command.validateParams({} as any)).toBeFalsy()
    expect(command.validateParams([])).toBeTruthy()
  })

  test('validateResult()', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(command.validateResult(undefined)).toBeFalsy()
    expect(command.validateResult({})).toBeTruthy()
  })
})

describe('Command.stringify()', () => {
  test('L100,100', async () => {
    const command = new Command('L', [100, 100])
    expect(command.stringify()).toBe('L100,100')
  })
})
