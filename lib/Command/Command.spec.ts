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
})
